import React, { useState, useContext } from "react";
import { MainPageData } from "../context";
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";
import Hero from "../components/hero/Hero";
import Title from "../components/title/Title";
import MobileMenu from "../components/mobileMenu/MobileMenu";
import Container from "../components/Container/Container";
import ProjectsCard from "../components/project/ProjectsCard";
import TagsList from "../components/tagsList/TagsList";
import Paragraph from "../components/paragrapth/Paragraph";
import Bio from "../components/bio/Bio";
import Timeline from "../components/timeline/Timeline";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

const App: React.FunctionComponent = () => {
  const [mobileMenuStatus, setMobileMenuStatus] = useState<boolean>(false);
  const [aboutVisible, setAboutVisiable] = useState<boolean>(false);
  const [contactsVisible, setContactsVisible] = useState<boolean>(false);
  const [portfolioVisible, setPortfolioVisable] = useState<boolean>(false);
  const [data, bio] = useContext(MainPageData);

  const handleBurgetClick = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };

  return (
    <div className="App">
      <Navigation
        handleClick={() => {
          handleBurgetClick();
        }}
      />
      <Container>
        <Hero id="hero" />
        <MobileMenu status={mobileMenuStatus} />
        <Section visability={aboutVisible} setVisability={setAboutVisiable} id="about">
          <Title
            title="About me"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          <Bio>
            <Paragraph title="My Story" text={bio[0].attributes.bio} />
            {bio && <TagsList title="Skill set" tags={bio[0].attributes.teches.data} />}
          </Bio>
          <Timeline />
        </Section>
        <Section
          visability={portfolioVisible}
          setVisability={setPortfolioVisable}
          id="portfolio"
          style={{ minHeight: "100vh" }}
        >
          <Title
            title="projects"
            subtitle="Here you will find some of the personal projects that I created with each project containing its own case study"
          />
          {data &&
            data.map((item: any, index: number) => (
              <ProjectsCard
                key={index}
                text={item.attributes.description.trim()}
                title={item.attributes.title}
                index={item.id}
                scrolled={portfolioVisible}
                to={`/${item.id}`}
                image={`${item.attributes.thumbnail.data.attributes.formats.medium.url}`}
              />
            ))}
        </Section>
        <Section visability={contactsVisible} setVisability={setContactsVisible} id="contacts">
          <Contacts />
        </Section>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
