import { Patient } from "./Patient";

const resolvers = {
  Query: {
    ...Patient.resolvers.queries,
  },
  Mutation: {
    ...Patient.resolvers.mutations,
  },
};

export default resolvers;
