import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product</p>
        <p>Version: 1.0.0</p>
        <p href="/">Back to Home</p>
      </div>
    </Card>
  );
}

export default AboutPage;
