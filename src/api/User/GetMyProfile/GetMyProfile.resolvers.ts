import { Resolvers } from "../../../types/resolvers";
import { GetMyProfileResponse } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: async (_, __, { req }): Promise<GetMyProfileResponse> => {
      const user = req.user;

      try {
        const profile = await User.findOne({
          id: user.id
        });

        if (profile) {
          return {
            ok: true,
            error: null,
            profile
          };
        } else {
          return {
            ok: false,
            error: "Cannot find your profile",
            profile: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          profile: null
        };
      }
    }
  }
};

export default resolvers;
