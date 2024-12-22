namespace $Enums {
  export type Role = "user" | "admin" | "moderator";
}

export type UserType = {
  id: string;
  emailAddress: string;
  password: string;
  name: string | null;
  imageUrl: string | null;
  role: $Enums.Role;
};
