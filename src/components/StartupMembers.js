const StartupMembers = ({ members, variant }) => {
  return (
    <div className="members-container">
      {members.map((member) => (
        <div className="member-profile" key={member.id}>
          <img
            className="member-image"
            src={member.pictureUrl}
            width={variant === "large" ? "100" : "50"}
            height={variant === "large" ? "100" : "50"}
            alt="Startup Logo"
          ></img>
          {`${member.firstName} ${member.lastName[0]}.`}
          <span className="muted">{member.role}</span>
        </div>
      ))}
    </div>
  );
};

StartupMembers.defaultProps = {
  variant: "normal",
};

export default StartupMembers;
