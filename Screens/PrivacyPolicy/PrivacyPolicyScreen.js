import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./privacyPolicy.style";
import Header from "./header/Header";

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ScrollView style={styles.bodyContainer}>
          <Text style={styles.headerTitleText}>PRIVACY POLICY</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Privacy Policy</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Last updated: July 02, 2024
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the Privacy Policy
              Generator.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Interpretation and Definitions</Text>
          </View>
          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>Interpretation</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </Text>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>Definitions</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              For the purposes of this Privacy Policy:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Account </Text>means a unique
                account created for You to access our Service or parts of our
                Service.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Affiliate </Text>means an entity
                that controls, is controlled by or is under common control with
                a party, where "control" means ownership of 50% or more of the
                shares, equity interest or other securities entitled to vote for
                election of directors or other managing authority.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Application </Text>refers to
                DOBLIFE, the software program provided by the Company.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Company </Text>(referred to as
                either "the Company", "We", "Us" or "Our" in this Agreement)
                refers to Mentorspire Information Technology Services, Tayabas,
                Quezon 4327.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Country </Text>refers to:
                Philippines
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Device </Text>means any device
                that can access the Service such as a computer, a cellphone or a
                digital tablet.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Personal Data </Text>is any
                information that relates to an identified or identifiable
                individual.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Service </Text>refers to the
                Application.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Service Provider </Text>means any
                natural or legal person who processes the data on behalf of the
                Company. It refers to third-party companies or individuals
                employed by the Company to facilitate the Service, to provide
                the Service on behalf of the Company, to perform services
                related to the Service or to assist the Company in analyzing how
                the Service is used.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>
                  Third-party Social Media Service{" "}
                </Text>
                refers to any website or any social network website through
                which a User can log in or create an account to use the Service.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>Usage Data </Text>refers to data
                collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example,
                the duration of a page visit).
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>You </Text>means the individual
                accessing or using the Service, or the company, or other legal
                entity on behalf of which such individual is accessing or using
                the Service, as applicable.
              </Text>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              Collecting and Using Your Personal Data
            </Text>
          </View>
          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Types of Data Collected
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Personal Data</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>First Name</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Middle Name</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Last Name</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Email Address</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Date of Birth</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Age</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Profile Picture</Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Locations such as Place of Birth, Living Address, Hometown
                Address and Voting Address
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>Usage Data</Text>
            </View>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Usage Data</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Usage Data is collected automatically when using the Service.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              Information from Third-Party Social Media Services
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company allows You to create an account and log in to use the
              Service through Facebook, a third-party Social Media Service:
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If You decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal data
              that is already associated with Your Third-Party Social Media
              Service's account, such as Your name, Your email address, Your
              activities or Your contact list associated with that account.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You may also have the option of sharing additional information
              with the Company through Your Third-Party Social Media Service's
              account. If You choose to provide such information and Personal
              Data, during registration or otherwise, You are giving the Company
              permission to use, share, and store it in a manner consistent with
              this Privacy Policy.
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>
              Information Collected while Using the Application
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              While using Our Application, in order to provide features of Our
              Application, We may collect, with Your prior permission:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Information regarding your location
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Pictures and other information from your Device's camera and
                photo library
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We use this information to provide features of Our Service, to
              improve and customize Our Service. The information may be uploaded
              to the Company's servers and/or a Service Provider's server or it
              may be simply stored on Your device.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You can enable or disable access to this information at any time,
              through Your Device settings.
            </Text>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Use of Your Personal Data
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company may use Personal Data for the following purposes:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>
                  To provide and maintain our Service
                </Text>
                , including to monitor the usage of our Service.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>To manage Your Account: </Text>to
                manage Your registration as a user of the Service. The Personal
                Data You provide can give You access to different
                functionalities of the Service that are available to You as a
                registered user.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>
                  For the performance of a contract:{" "}
                </Text>
                the development, compliance and undertaking of the purchase
                contract for the products, items or services You have purchased
                or of any other contract with Us through the Service.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>To contact You: </Text>To contact
                You by email, telephone calls, SMS, or other equivalent forms of
                electronic communication, such as a mobile application's push
                notifications regarding updates or informative communications
                related to the functionalities, products or contracted services,
                including the security updates, when necessary or reasonable for
                their implementation.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>To provide You </Text>with news,
                special offers and general information about other goods,
                services and events which we offer that are similar to those
                that you have already purchased or enquired about unless You
                have opted not to receive such information.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>To manage Your requests: </Text>To
                attend and manage Your requests to Us.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>For business transfers: </Text>We
                may use Your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of Our assets, whether as
                a going concern or as part of bankruptcy, liquidation, or
                similar proceeding, in which Personal Data held by Us about our
                Service users is among the assets transferred.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>For other purposes: </Text>We may
                use Your information for other purposes, such as data analysis,
                identifying usage trends, determining the effectiveness of our
                promotional campaigns and to evaluate and improve our Service,
                products, services, marketing and your experience.
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We may share Your personal information in the following
              situations:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>With Service Providers: </Text>We
                may share Your personal information with Service Providers to
                monitor and analyze the use of our Service, to contact You.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>For business transfers: </Text>We
                may share or transfer Your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our
                business to another company.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>With Affiliates: </Text>We may
                share Your information with Our affiliates, in which case we
                will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>With business partners: </Text>We
                may share Your information with Our business partners to offer
                You certain products, services or promotions.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>With other users: </Text>when You
                share personal information or otherwise interact in the public
                areas with other users, such information may be viewed by all
                users and may be publicly distributed outside. If You interact
                with other users or register through a Third-Party Social Media
                Service, Your contacts on the Third-Party Social Media Service
                may see Your name, profile, pictures and description of Your
                activity. Similarly, other users will be able to view
                descriptions of Your activity, communicate with You and view
                Your profile.
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                <Text style={styles.boldText}>With Your consent: </Text>We may
                disclose Your personal information for any other purpose with
                Your consent.
              </Text>
            </View>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Retention of Your Personal Data
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </Text>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Transfer of Your Personal Data
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </Text>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Delete Your Personal Data
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </Text>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Disclosure of Your Personal Data
            </Text>
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Business Transactions</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Law enforcement</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </Text>
          </View>

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitleText}>Other legal requirements</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Comply with a legal obligation
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Protect and defend the rights or property of the Company
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Protect the personal safety of Users of the Service or the
                public
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                Protect against legal liability
              </Text>
            </View>
          </View>

          <View style={styles.secondaryTitleContainer}>
            <Text style={styles.secondaryTitleText}>
              Security of Your Personal Data
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Children's Privacy</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Links to Other Websites</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Changes to this Privacy Policy</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Contact Us</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </Text>
          </View>
          <View style={styles.listContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.bulletText}>{"\u2B24"}</Text>
              <Text style={styles.listText}>
                By email: mentorspireitservices@gmail.com
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.understandButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.understandText}>
              I Understand the privacy policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicyScreen;