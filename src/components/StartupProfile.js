import Button from "react-bootstrap/Button";
import ProfileHighlights from "./ProfileHighlights";
import { useState } from "react";
import ProductHighlights from "./ProjectHighlights";
import StartupMembers from "./StartupMembers";

const StartupProfile = ({ data }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  return (
    <div
      className="startup-profile"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${data.logoUrl})`,
      }}
    >
      <div className="profile-header">
        <a className="profile-name" href={data.website}>
          {data.name}
        </a>{" "}
        <span className="muted">
          {data.foundedYear} {` (${data.incorporatedLocation})`}
        </span>
      </div>
      <div>{data.industry}</div>
      <ProfileHighlights
        match={data.match}
        raises={data.raises}
        targetRaise={data.targetRaise}
        stage={data.stage}
        fundraiseStage={data.fundraiseStage}
        variant={"extra"}
      />
      <div
        className="extra-info-toggle"
        onClick={() => setShowExtraInfo(!showExtraInfo)}
        style={{ backgroundColor: showExtraInfo ? "red" : "green" }}
      >
        {showExtraInfo ? "-" : "+"}
      </div>

      <div
        className="profile-extra-info"
        style={{ display: showExtraInfo ? "flex" : "none" }}
      >
        <div className="profile-oneliner">{data.oneLiner}</div>
        <ProductHighlights productHighlights={data.productHighlights} />
      </div>

      <StartupMembers members={data.members} />
      <div className="profile-footer">
        <Button href={data.website}>Visit Website &#127760;</Button>
        <Button disabled={!showExtraInfo} variant="warning">
          Onboard
        </Button>
      </div>
    </div>
  );
};

export default StartupProfile;
