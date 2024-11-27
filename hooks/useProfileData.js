import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "../api/userApi";

export const useProfileData = (userToken) => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchUserProfile(userToken),
    throwOnError: (error) => console.log(error.response),
  });
};
