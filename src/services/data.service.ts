import type { LandingPageData } from "@/config/landing.interface";
import landingData from "@/data/landing.json";

// Ensure the type of `landingData` matches `LandingPageData`
export const getLandingData = async (): Promise<LandingPageData> => {
  // Ensure `landingData` conforms to `LandingPageData` type
  const data: LandingPageData = landingData as LandingPageData;
  return data;
};
