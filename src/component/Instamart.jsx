import { useState } from "react";

const Section = ({ tittle, discription, isvisible, setisvisible }) => {
  //   const [isvisible, setisvisible] = useState(false);
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="text-xl font-bold ">{tittle}</h1>

      {isvisible ? (
        <>
          <button
            onClick={() => {
              setisvisible(false);
            }}
            className="underline cursor-pointer"
          >
            Hide
          </button>
          <p>{discription}</p>
        </>
      ) : (
        <button
          onClick={() => {
            setisvisible(tittle);
          }}
          className="underline cursor-pointer"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  //   const [sectionConfig, setSectionConfig] = useState({
  //     showAbout: false,
  //     showTeam: false,
  //     showProduct: false,
  //   });
  const [visibleSection, setvisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        tittle={"About InstaMart"}
        discription={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "
        }
        // if mera visibleSection === about true pass hoga isvisible
        isvisible={visibleSection === "About InstaMart"}
        setisvisible={(value) => {
          setvisibleSection(value);
          console.log(value);
        }}
      />
      <Section
        tittle={"Team Memder"}
        discription={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "
        }
        isvisible={visibleSection === "Team Memder"}
        setisvisible={(value) => {
          setvisibleSection(value);
          console.log(value);
        }}
      />
      <Section
        tittle={"Production"}
        discription={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. "
        }
        isvisible={visibleSection === "Production"}
        setisvisible={(value) => {
          setvisibleSection(value);
          console.log(value);
        }}
      />

      {/* This is a basiclly a section in our Instamart means all the contend layout will be same in this component
            so make a section of all this and change according by sending props */}
      {/* <AboutInstamart/>
            <DetailsofInstamart/>
            <TeamofInstamart/>
            <Product/>
            <Careers/> */}
    </div>
  );
};
export default Instamart;
