type Social = {
  type: "github" | "facebook" | "x" | "instagram";
  url: string;
};

type Project = {
  name: string;
  url?: string;
  status: "active" | "inactive" | "pause";
};

type Experience = {
  role: string;
  company?: string;
  period?: string;
  responsibilities?: string[];
};

type PersonalDetails = {
  name: string;
  avatar: string;
  aboutMe: string;
  socials: Social[];
};
