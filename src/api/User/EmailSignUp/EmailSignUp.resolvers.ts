import { Resolvers } from "../../../types/resolvers";
import { EmailSignUpResponse, EmailSignUpMutationArgs } from "../../../types/graph";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (_, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
      try {
        const { email } = args;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "This email has signed up already, please sign in",
            user: null
          };
        } else {
          const user = await User.create({ ...args }).save();
          if (user) {
            return {
              ok: true,
              error: null,
              user
            };
          } else {
            return {
              ok: false,
              error: "Registering Failed",
              user: null
            };
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
