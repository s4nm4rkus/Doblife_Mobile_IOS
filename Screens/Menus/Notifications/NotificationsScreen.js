import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import styles from "./notifications.style";
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptRequest,
  acceptTeamRequest,
  declineTeamRequest,
  deleteRequest,
  fetchTeamRequests,
} from "../../../api/requestApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  isAcceptInvitationModalVisibleValue,
  isConfirmDeleteNotificationModalVisibleValue,
  isDeclineInvitationModalVisibleValue,
  leagueParticipantIDValue,
  notificationsValue,
  requestByValue,
  requestIDValue,
  setIsAcceptInvitationModalVisible,
  setIsConfirmDeleteNotificationModalVisible,
  setIsDeclineInvitationModalVisible,
  setLeagueParticipantID,
  setNotifications,
  setRequestBy,
  setRequestID,
  setTeamName,
  teamNameValue,
} from "../../../features/notifications/notificationsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AcceptInvitationModal from "./modal/AcceptInvitationModal";
import Toast from "react-native-toast-message";
import { useFocusEffect } from "@react-navigation/native";
import ConfirmDeleteNotificationModal from "./modal/confirmDeleteNotification/ConfirmDeleteNotificationModal";
import DeclineInvitationModal from "./modal/declineInvitation/DeclineInvitationModal";
import StatusTransitionInstructionsModal from "./modal/statusTransitionInstructions/StatusTransitionInstructionsModal";
import { checkSameLeague } from "../../../api/leagueParticipantApi";

const NotificationItem = ({ notification, onDecline, onAccept, onDelete }) => {
  const { league_participant, status, type } = notification;
  const teamProfile = league_participant?.team_profile;
  const teamImage = teamProfile?.default_team_profile_pic
    ? { uri: teamProfile.default_team_profile_pic.image }
    : require("../../../assets/teamPlaceholders/team-placeholder-04.png");

  const getStatusText = () => {
    switch (status) {
      case "pending":
        return (
          <>
            <Text style={styles.notificationTextDescription}>
              <Text style={styles.teamNameText}>{teamProfile.name}</Text> sent
              you a recruitment for their team
            </Text>
          </>
        );
      case "approved":
        return (
          <>
            <Text style={styles.notificationTextDescription}>
              Your request to join on the team{" "}
              <Text style={styles.teamNameText}>{teamProfile.name}</Text> has
              been approved.
            </Text>
          </>
        );
      case "rejected":
        return (
          <>
            <Text style={styles.notificationTextDescription}>
              Your request to join on the team{" "}
              <Text style={styles.teamNameText}>{teamProfile.name}</Text> has
              been rejected.
            </Text>
          </>
        );
      default:
        return "";
    }
  };

  const isTeamApproval = type === "team approval";
  const isLeagueApproval = type === "league approval";

  if (isTeamApproval) {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.notificationWrapper}>
          <View style={styles.teamLogoContainer}>
            <Image
              source={teamImage}
              resizeMode="contain"
              style={styles.teamLogo}
            />
          </View>
          <View style={styles.textAndButtonsContainer}>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTextDescription}>
                {getStatusText()}
              </Text>
            </View>
            {status === "pending" && (
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.declineButtonContainer}
                  onPress={() => onDecline(notification)}
                >
                  <Text style={styles.declineText}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.acceptButtonContainer}
                  onPress={() => onAccept(notification)}
                >
                  <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.xMarkContainer}>
              <TouchableOpacity onPress={() => onDelete(notification)}>
                <FontAwesomeIcon icon={faXmark} size={hp(3)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (isLeagueApproval) {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.notificationWrapper}>
          <View style={styles.envelopeContainer}>
            <FontAwesomeIcon icon={faEnvelope} size={hp(5)} color="#b21e10" />
          </View>
          <View style={styles.notificationAndButtonsContainer}>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationTextDescription}>
                <Text style={styles.acceptedText}>
                  Your League was Accepted!.
                </Text>{" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Text>
            </View>
            <View style={styles.xMarkContainer}>
              <TouchableOpacity onPress={() => onDelete(notification)}>
                <FontAwesomeIcon icon={faXmark} size={hp(3)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const NotificationsList = ({
  notifications,
  handleOpenDeclineInvitationModal,
  handleOpenAcceptInvitationModal,
  handleOpenConfirmDeleteNotificationModal,
}) => {
  if (notifications.length === 0) {
    return (
      <View style={styles.noNotificationContainer}>
        <Text style={styles.noNotificationListedText}>No Notification</Text>
      </View>
    );
  }

  return (
    <>
      {notifications.map((notification, index) => {
        return (
          <NotificationItem
            key={index}
            notification={notification}
            onDecline={handleOpenDeclineInvitationModal}
            onAccept={handleOpenAcceptInvitationModal}
            onDelete={handleOpenConfirmDeleteNotificationModal}
          />
        );
      })}
    </>
  );
};

const NotificationsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const [isBusy, setBusy] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const leagueParticipantID = useSelector(leagueParticipantIDValue);
  const requestBy = useSelector(requestByValue);
  const requestID = useSelector(requestIDValue);
  const notifications = useSelector(notificationsValue);
  const isAcceptInvitationModalVisible = useSelector(
    isAcceptInvitationModalVisibleValue
  );
  const isDeclineInvitationModalVisible = useSelector(
    isDeclineInvitationModalVisibleValue
  );
  const isConfirmDeleteNotificationModalVisible = useSelector(
    isConfirmDeleteNotificationModalVisibleValue
  );
  const teamName = useSelector(teamNameValue);
  const [playerCurrentTeam, setPlayerCurrentTeam] = useState(null);
  const [newTeam, setNewTeam] = useState(null);
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);

  const { mutateAsync: checkSameLeagueMutation } = useMutation({
    mutationFn: checkSameLeague,
    onSuccess: (data) => {},
  });

  const { mutateAsync: fetchTeamRequestsMutation } = useMutation({
    mutationFn: fetchTeamRequests,
    onSuccess: (data) => {
      dispatch(setNotifications(data));
    },
  });

  const { mutateAsync: acceptTeamRequestMutation } = useMutation({
    mutationFn: acceptTeamRequest,
    onSuccess: (data) => {},
  });

  const { mutateAsync: declineTeamRequestMutation } = useMutation({
    mutationFn: declineTeamRequest,
    onSuccess: (data) => {},
  });

  const { mutateAsync: deleteRequestMutation } = useMutation({
    mutationFn: deleteRequest,
    onSuccess: (data) => {},
  });

  const handleFetchTeamRequests = async () => {
    const params = {};

    try {
      await fetchTeamRequestsMutation({ params, userToken });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleAccept = async (player) => {
    const params = {
      request_by: requestBy,
      league_participants_id: leagueParticipantID,
    };

    const sameLeagueParams = {
      league_participant_id: leagueParticipantID,
    };

    try {
      await acceptTeamRequestMutation({ userToken, params });
      const teamInfo = await checkSameLeagueMutation({
        userToken,
        params: sameLeagueParams,
      });
      dispatch(setIsAcceptInvitationModalVisible(false));
      if (teamInfo.has_same_league) {
        setPlayerCurrentTeam(teamInfo.previous_team_name);
        setNewTeam(teamInfo.new_team_name);
        setIsStatusModalVisible(true);
      } else {
        handleFetchTeamRequests();
        Toast.show({
          type: "customToast",
          text1: `You successfully joined ${teamName}.`,
        });
      }
      console.log(teamInfo);
      //
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleDelete = async (player) => {
    const params = {
      request_id: requestID,
    };

    try {
      await deleteRequestMutation({ userToken, params });
      handleFetchTeamRequests();
      dispatch(setIsConfirmDeleteNotificationModalVisible(false));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleDecline = async (player) => {
    const params = {
      request_by: requestBy,
      league_participants_id: leagueParticipantID,
    };

    try {
      await declineTeamRequestMutation({ userToken, params });
      handleFetchTeamRequests();
      dispatch(setIsDeclineInvitationModalVisible(false));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleOkay = () => {
    setIsStatusModalVisible(false);
    handleFetchTeamRequests();
    Toast.show({
      type: "customToast",
      text1: `You successfully joined ${teamName}.`,
    });
  };

  const handleOpenAcceptInvitationModal = (notification) => {
    dispatch(setTeamName(notification.league_participant.team_profile.name));
    dispatch(setLeagueParticipantID(notification.league_participant.id));
    dispatch(setRequestBy(notification.request_by.id));
    dispatch(setIsAcceptInvitationModalVisible(true));
  };

  const handleOpenDeclineInvitationModal = (notification) => {
    dispatch(setTeamName(notification.league_participant.team_profile.name));
    dispatch(setLeagueParticipantID(notification.league_participant.id));
    dispatch(setRequestBy(notification.request_by.id));
    dispatch(setIsDeclineInvitationModalVisible(true));
  };

  const handleOpenConfirmDeleteNotificationModal = (notification) => {
    dispatch(setRequestID(notification.id));
    dispatch(setIsConfirmDeleteNotificationModalVisible(true));
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchTeamRequests();
    }, [])
  );

  return (
    <>
      {isBusy ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <ActivityIndicator size="large" color="#9b001c" />
        </View>
      ) : (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.accountSettingsTextContainer}>
            <Text style={styles.accountSettingsText}>Notifications</Text>
          </View>
          <NotificationsList
            notifications={notifications}
            handleOpenDeclineInvitationModal={handleOpenDeclineInvitationModal}
            handleOpenAcceptInvitationModal={handleOpenAcceptInvitationModal}
            handleOpenConfirmDeleteNotificationModal={
              handleOpenConfirmDeleteNotificationModal
            }
          />
          {/* {
              notifications.length > 0 ? (
                notifications.map((notification, index) => {
                  if (notification.type == 'team approval') {
                    if (notification.status == 'pending') {
                      return (
                        <View 
                          style={styles.notificationContainer}
                          key={index}
                        >
                          <View style={styles.notificationWrapper}>
                            <View style={styles.teamLogoContainer}>
                              {
                                notification.league_participant.team_profile.default_team_profile_pic ? (
                                  <Image source={{ uri: notification.league_participant.team_profile.default_team_profile_pic.image }} resizeMode="contain" style={styles.teamLogo} />
                                ) : (
                                  <Image source={require('../../../assets/teamPlaceholders/team-placeholder-04.png')} resizeMode="contain" style={styles.teamLogo} />
                                )
                              }
                            </View>
                            <View style={styles.textAndButtonsContainer}>
                              <View style={styles.notificationTextContainer}>
                                <Text style={styles.notificationTextDescription}><Text style={styles.teamNameText}>{notification.league_participant.team_profile.name}</Text> sent you a recruitment for their team</Text>
                              </View>
                              <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                  style={styles.declineButtonContainer}
                                  onPress={() => handleOpenDeclineInvitationModal(notification)}
                                >
                                  <Text style={styles.declineText}>Decline</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={styles.acceptButtonContainer}
                                  onPress={() => handleOpenAcceptInvitationModal(notification)}
                                >
                                  <Text style={styles.acceptText}>Accept</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={styles.xMarkContainer}>
                                <TouchableOpacity 
                                  onPress={() => handleOpenConfirmDeleteNotificationModal(notification)}
                                >
                                  <FontAwesomeIcon 
                                    icon={faXmark} 
                                    size={hp(3)}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    }
  
                    if (notification.status == 'approved') {
                      return (
                        <View 
                          style={styles.notificationContainer}
                          key={index}
                        >
                          <View style={styles.notificationWrapper}>
                            <View style={styles.teamLogoContainer}>
                              {
                                notification.league_participant.team_profile.default_team_profile_pic ? (
                                  <Image source={{ uri: notification.league_participant.team_profile.default_team_profile_pic.image }} resizeMode="contain" style={styles.teamLogo} />
                                ) : (
                                  <Image source={require('../../../assets/teamPlaceholders/team-placeholder-04.png')} resizeMode="contain" style={styles.teamLogo} />
                                )
                              }
                            </View>
                            <View style={styles.textAndButtonsContainer}>
                              <View style={styles.notificationTextContainer}>
                                <Text style={styles.notificationTextDescription}>Your request to join on the team <Text style={styles.teamNameText}>{notification.league_participant.team_profile.name}</Text> has been approved.</Text>
                              </View>
                              <View style={styles.xMarkContainer}>
                                <TouchableOpacity 
                                  onPress={() => handleOpenConfirmDeleteNotificationModal(notification)}
                                >
                                  <FontAwesomeIcon 
                                    icon={faXmark} 
                                    size={hp(3)}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    }
  
                    if (notification.status == 'rejected') {
                      return (
                        <View 
                          style={styles.notificationContainer}
                          key={index}
                        >
                          <View style={styles.notificationWrapper}>
                            <View style={styles.teamLogoContainer}>
                              {
                                notification.league_participant.team_profile.default_team_profile_pic ? (
                                  <Image source={{ uri: notification.league_participant.team_profile.default_team_profile_pic.image }} resizeMode="contain" style={styles.teamLogo} />
                                ) : (
                                  <Image source={require('../../../assets/teamPlaceholders/team-placeholder-04.png')} resizeMode="contain" style={styles.teamLogo} />
                                )
                              }
                            </View>
                            <View style={styles.textAndButtonsContainer}>
                              <View style={styles.notificationTextContainer}>
                                <Text style={styles.notificationTextDescription}>Your request to join on the team <Text style={styles.teamNameText}>{notification.league_participant.team_profile.name}</Text> has been rejected.</Text>
                              </View>
                              <View style={styles.xMarkContainer}>
                                <TouchableOpacity 
                                  onPress={() => handleOpenConfirmDeleteNotificationModal(notification)}
                                >
                                  <FontAwesomeIcon 
                                    icon={faXmark} 
                                    size={hp(3)}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    }
                  }

                  if (notification.type == 'league approval') {
                    if (notification.status == 'approved') {
                      return (
                        <View 
                          style={styles.notificationContainer}
                          key={index}
                        >
                          <View style={styles.notificationWrapper}>
                            <View style={styles.textAndButtonsContainer}>
                              <View style={styles.notificationTextContainer}>
                                <Text style={styles.notificationTextDescription}>Your League was Accepted!.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Text>
                              </View>
                              <View style={styles.xMarkContainer}>
                                <TouchableOpacity 
                                  onPress={() => handleOpenConfirmDeleteNotificationModal(notification)}
                                >
                                  <FontAwesomeIcon 
                                    icon={faXmark} 
                                    size={hp(3)}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      )
                    }
                  }
                  
                })
              ) : (
                <View 
                  style={styles.noNotificationContainer}
                >
                  <Text style={styles.noNotificationListedText}>No Notification</Text>
                </View>
              )
            } */}
          <AcceptInvitationModal
            navigation={navigation}
            isVisible={isAcceptInvitationModalVisible}
            isCanceled={() =>
              dispatch(setIsAcceptInvitationModalVisible(false))
            }
            handleAccept={handleAccept}
          />
          <ConfirmDeleteNotificationModal
            navigation={navigation}
            isVisible={isConfirmDeleteNotificationModalVisible}
            isCanceled={() =>
              dispatch(setIsConfirmDeleteNotificationModalVisible(false))
            }
            handleDelete={handleDelete}
          />
          <DeclineInvitationModal
            navigation={navigation}
            isVisible={isDeclineInvitationModalVisible}
            isCanceled={() =>
              dispatch(setIsDeclineInvitationModalVisible(false))
            }
            handleDecline={handleDecline}
          />
          <StatusTransitionInstructionsModal
            isVisible={isStatusModalVisible}
            isCanceled={() => setIsStatusModalVisible(false)}
            handleOkay={() => handleOkay()}
            playerCurrentTeam={playerCurrentTeam}
            newTeam={newTeam}
          />
        </View>
      )}
    </>
  );
};

export default NotificationsScreen;
