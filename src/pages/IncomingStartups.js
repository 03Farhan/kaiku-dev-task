import { useEffect, useState } from "react";
import ProfileHighlights from "../components/ProfileHighlights";
import LoadingAnimation from "../components/LoadingAnimation";
import Button from "react-bootstrap/Button";
import NewMeetingForm from "../components/NewMeetingForm";
import ProductHighlights from "../components/ProjectHighlights";
import StartupMembers from "../components/StartupMembers";

const IncomingStartups = () => {
  const [startupData, setStartupData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [startupSelected, setStartupSelected] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/startups")
      .then((res) => res.json())
      .then((res) => {
        setStartupSelected(res[0]);
        setStartupData(res);
        setLoading(false);
      })
      .catch((e) => setError(true));
  }, []);

  if (error) {
    return (
      <div>
        <p>
          An error has occurred when trying to retrieve data from the mock
          backend.
        </p>
        <p>Please start the mock backend and refresh this page.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="data-loading">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="incoming-startups">
      <div
        className="incoming-background"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${startupSelected.logoUrl})`,
        }}
      ></div>
      <div className="startups-sidebar">
        <div className="sidebar-header">Incoming Startups</div>
        {startupData.map((startup) => (
          <div
            key={startup.id}
            className="sidebar-item"
            onClick={() => setStartupSelected(startup)}
            style={{
              color: startup.id === startupSelected.id ? "#14a854" : "white",
              borderWidth: startup.id === startupSelected.id ? "2px" : "1px",
            }}
          >
            {startup.name}
          </div>
        ))}
      </div>
      <div className="incoming-startup-profile">
        <div className="d-flex flex-row">
          <div className="incoming-content">
            <h2>{startupSelected.name}</h2>
            <h3>{startupSelected.industry}</h3>
            <ProfileHighlights
              match={startupSelected.match}
              raises={startupSelected.raises}
              targetRaise={startupSelected.targetRaise}
              stage={startupSelected.stage}
              fundraiseStage={startupSelected.fundraiseStage}
            />
            <p>{startupSelected.oneLiner}</p>
            <p>Product Highlights:</p>
            <ProductHighlights
              productHighlights={startupSelected.productHighlights}
            />
          </div>
          <img src={startupSelected.logoUrl} alt="company logo"></img>
        </div>
        <div className="incoming-footer">
          <h3 style={{ textAlign: "center" }}>Meet the Team:</h3>
          <StartupMembers members={startupSelected.members} variant="large" />
          <div className="meeting-button">
            <Button onClick={() => setShowForm(true)}>Request Meeting</Button>
          </div>
        </div>
      </div>
      <NewMeetingForm
        startupName={startupSelected.name}
        show={showForm}
        closeForm={() => setShowForm(false)}
      />
    </div>
  );
};

export default IncomingStartups;
