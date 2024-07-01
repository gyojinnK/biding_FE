import { UserApi } from "@/lib/openapi";
import { actionClient } from "@/lib/safe-action";
import { z } from "zod";

const createUserSchema = z.object({
  email: z.string().min(2),
  name: z.string().default(""),
  password: z.string().min(3),
  phoneNumber: z.string().min(11).default(""),
  address: z.string().default(""),
  addressDetail: z.string().default(""),
});

export const createUser = actionClient
  .schema(createUserSchema)
  .action(
    async ({
      parsedInput: {
        email,
        name,
        password,
        phoneNumber,
        address,
        addressDetail,
      },
    }) => {
      const userApi = new UserApi();
      const response = await userApi.usersControllerCreate({
        email,
        name,
        password,
        phoneNumber,
        address,
        addressDetail,
      });
    }
  );
