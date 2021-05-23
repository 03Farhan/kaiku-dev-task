import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StartupProfile from "../components/StartupProfile";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import Button from "react-bootstrap/Button";
import NewProfileForm from "../components/NewProfileForm";

const OnboardStartups = () => {
  const [startupData, setStartupData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (newStartupInfo) => {
    const newStartup = {
      foundedYear: 2021,
      fundraiseStage: "seed",
      id: (startupData.length + 1).toString(),
      incorporatedLocation: "EX",
      industry: "example",
      logoUrl: startupData[0].logoUrl,
      match: 95,
      members: startupData[0].members,
      productHighlights: startupData[0].productHighlights,
      stage: "revenue generation",
      wesbite: "http://fiw.ua/gekeh",

      ...newStartupInfo,
    };

    setStartupData([newStartup, ...startupData]);
    setShowForm(false);
  };

  useEffect(() => {
    fetch("http://localhost:8000/startups")
      .then((res) => res.json())
      .then((res) => {
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
    <div className="onboard-startups">
      <Row className="onboard-header">
        <Col xs={3} />
        <Col xs={6}>
          <h2>Onboard Startups</h2>
        </Col>
        <Col xs={3}>
          <Button variant="success" onClick={() => setShowForm(true)}>
            Create New Profile
          </Button>
        </Col>
      </Row>

      <Row style={{ maxWidth: "100%", margin: "0" }}>
        {startupData.map((startup) => (
          <Col
            key={startup.id}
            xs={12}
            md={6}
            lg={6}
            xl={4}
            className="profile-container"
          >
            <StartupProfile data={startup} />
          </Col>
        ))}
      </Row>
      <NewProfileForm
        show={showForm}
        closeForm={() => setShowForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default OnboardStartups;
