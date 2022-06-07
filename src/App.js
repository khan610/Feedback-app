import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  )
}

Header.defaultProps = {
  text: "Feedback UI",
}

export default App
