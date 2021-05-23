import ProgressRing from "./ProgressRing";
import { useState } from "react";

const ProfileHighlights = ({
  match,
  raises,
  targetRaise,
  stage,
  fundraiseStage,
  variant,
}) => {
  const [showRaiseBreakdown, setShowRaiseBreakdown] = useState(false);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let totalAmountRaised = 0;
  raises.forEach((raise) => {
    totalAmountRaised += raise.amountRaised;
  });

  const percentageRaised = (totalAmountRaised / targetRaise) * 100;

  return (
    <div className="profile-highlights">
      <div className="profile-highlight-group">
        <ProgressRing radius={30} stroke={4} progress={match} type="match" />
        <div className="profile-highlight-text">
          <span>
            <strong>{match}</strong>%
          </span>
          <span>Match</span>
        </div>
      </div>
      <div className="profile-highlight-group">
        <div
          className="raise-breakdown"
          style={{
            display:
              showRaiseBreakdown && variant === "extra" ? "block" : "none",
          }}
        >
          {`$${numberWithCommas(totalAmountRaised)} raised of 
            $${numberWithCommas(targetRaise)}`}
        </div>
        <div
          onMouseEnter={() => setShowRaiseBreakdown(true)}
          onMouseLeave={() => setShowRaiseBreakdown(false)}
        >
          <ProgressRing
            radius={30}
            stroke={4}
            progress={percentageRaised}
            type="raised"
          />
        </div>
        <div className="profile-highlight-text">
          <span>
            <strong>{Math.round(percentageRaised) + "%"}</strong>
          </span>
          <span>Raised</span>
        </div>
      </div>
      <div className="profile-highlight-group">
        <div className="profile-highlight-text">
          <span className="muted">Stage:</span>
          <strong>{stage}</strong>
        </div>
      </div>
      <div className="profile-highlight-group">
        <div className="profile-highlight-text">
          <span className="muted">Fundraise Stage:</span>
          <strong>{fundraiseStage}</strong>
        </div>
      </div>
    </div>
  );
};

ProfileHighlights.defaultProps = {
  variant: "standard",
};

export default ProfileHighlights;
