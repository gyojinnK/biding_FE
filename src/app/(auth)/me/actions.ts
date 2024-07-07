import { GetUserOutputDto, UserApi } from "@/lib/openapi";
import { getUserSession } from "@/server/auth/authentication";

export const getMe = async (): Promise<GetUserOutputDto | undefined> => {
  try {
    const session = await getUserSession();
    const accessToken = session?.user.accessToken;
    const userApi = new UserApi();
    const response = await userApi.usersControllerGetById({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status !== 400) return response.data;

    console.log(response.data);
    return response.data;
  } catch (error) {
    return undefined;
  }
};
