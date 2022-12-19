import SettingsAmenities from "./settingsAmenities.jsx";
import SettingsSubdivision from "./settingsSubdivision.jsx";
import SettingsDues from "./settingsDues.jsx";
import SettingsAccounts from "./settingsAccounts.jsx";
import SettingsOfficers from "./settingsOfficers.jsx"

export default function Settings() {
  return (
    <>
      {/* AMENITIES SECTION */}
      <SettingsAmenities/>
     
      {/* SUBDIVISION SECTION */}
      <SettingsSubdivision/>

      {/* MONTHLY DUES SECTION */}
      <SettingsDues/>

      {/* SYSTEM ACCOUNTS SECTION */}
      <SettingsAccounts/>
      
      {/* SUBDIVISION OFFICERS SECTION */}
      <SettingsOfficers />
      
    </>
  );
}
