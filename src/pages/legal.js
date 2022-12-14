import React from "react";
import "../styles/Legal.css";
import DividingLine from "../media/DividingLine.jpg";
import MIRC from "../media/MIRC.png";
import CityLife from "../media/CityLife.png";
import LegalNeeds from "../media/LegalNeeds.jpg";
import LegalQuest from "../media/pexels-pixabay-48195.jpg";
import Disclaimer from "../media/Disclaimer.png";
import QuestionModel from "../components/Question";

function Legal() {
  return (
    <div className="main-div">
      <h1 className="title">Legal</h1>
      <div className="intro-paragraph">
        Every immigrant and US citizen is protected under the consitutional
        rights of the United States of America
      </div>
      <div className="disclaimer">
        <div className="point-container">
          <img
            src={Disclaimer}
            className="exclamation-point-icon"
            alt="Disclaimer icon exclamation point"
          />
        </div>
        <div className="disclaimer-container">
          <b>Disclaimer:</b> Information on this website is for general
          informational purposes only. It is not intended as legal advice and
          should not be taken as such. If you have specific legal questions, you
          should consult with a licensed attorney.
        </div>
      </div>

      <div className="containing-div2">
        <h2 className="know-your-rights">Legal Resources in Grand Rapids</h2>
        <div className="two-column2">
          <img
            src={MIRC}
            title="Michigan Immigrants Rights Center Logo"
            alt="MIRC under bridge"
            className="widget-resize-childcare"
          />
          <h3>Michigan Immigrants Rights Center</h3>
          <p className="description-paragraphs">
            Michigan Immigrant Rights Center provides information for Immigrants
            regarding rights, guides to supporting yourself in Immigrant Court
            and trainings
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://michiganimmigrant.org/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={CityLife}
            title="Michigan Immigrants Rights Center Logo"
            alt="MIRC under bridge"
            className="widget-resize-childcare"
          />
          <h3>City Life Church</h3>
          <p className="description-paragraphs">
            <br />
            City Life Church is a group of people who want to live like Jesus
            did. They share meaningful relationships, and they know where to
            find the source of life.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.immigrantconnectiongr.org/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
      </div>
      <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
      <div className="containing-div2">
        <h2 className="know-your-rights">Lawyers in Grand Rapids</h2>
        <p>
          There are many different legal resources in the Grand Rapids area.
          These legal groups are ready to support immigrants in legal issues
          whatever the case may be! <br /> Click any of the links below to get
          in contact with them to support your legal issues!
        </p>
        <div className="two-column2">
          <img
            src={LegalQuest}
            title="Michigan Immigrants Rights Center Logo"
            alt="MIRC under bridge"
            className="widget-resize-childcare"
          />
          <h3>Legal Quest Network PC</h3>
          <p className="description-paragraphs">
            <b>Law Office of Rathi and Associates</b> offers "Affordable Expert
            Immigration Advice from Trusted Attorneys." Top rated and located in
            Grand Rapids.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://legalquestnetwork.com/?gclid=CjwKCAiA9qKbBhAzEiwAS4yeDWP_sNOm-OoCuSwCvtb1NSSouygswzyRX3Jv10yIRo_ciVtnkf1i_hoCva0QAvD_BwE"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={LegalNeeds}
            title="Michigan Immigrants Rights Center Logo"
            alt="MIRC under bridge"
            className="widget-resize-childcare"
          />
          <h3>Justia</h3>
          <p className="description-paragraphs">
            <b>Justia is a website for finding immigration lawyers</b> in your
            area including address, contact information, years of experience,
            and customer ratings.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.justia.com/lawyers/immigration-law/michigan/grand-rapids"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
      </div>
      <h3>Citizenship Test Questions</h3>
      <p>
        When applying for citizenship on or after March 1st, 2022, you have to
        pass the 2008 oral test that tests your ability to speak and understand
        English, and then answer 10 questions drawn from a list of 100.
      </p>
      <p><b>The English Portion as defined from the U.S. Citizenship and Immigration Services Website,</b></p>
      <p>&quot; For the reading test, you must read out loud one out of three sentences correctly to demonstrate an ability to read in English.&quot; </p>
      <p>&quot; For the writing test, you must write one out of the three sentences correctly to demonstrate an ability to write in English.&quot; </p>
      <p><b>The Civics Test,</b> is given orally by a USCIS officer and covers American Government, American History, and Integrated Civics. <b>Out of the 10 questions, you must answer 6 correctly.</b></p>
     <h3>Use the quiz below to find example questions</h3>
      <QuestionModel />
      <h3 className="know-your-rights">Learn your Consitutional Rights</h3>

      <div className="legal-two-column">
        <h3>First Ammendment</h3>
        <div className="legal-rights">
          <p>
            <b>
              Congress protects the right to freedom of speech, press, assembly,
              and petition
            </b>
          </p>
          <p>
            You have the right to practice any religious belief, attend
            religious ceremonies, speak freely of your opinions, and assemble
            peaceful petitions as long as no one is harmed and no threats are
            made.
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Second Ammendment</h3>
        <div className="legal-rights">
      
          <p>
            <b>Congress protects the right to bear arms</b>
          </p>
          <p>
            "A well regulated militia, being necessary to the security of a free
            state, the right of the people to keep and bear arms, shall not be
            infringed."
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Third Ammendment</h3>
        <div className="legal-rights">
          
          <p>
            <b>
              Congress prohibits prohibits the goverment from quartering troops
              in private homes.
            </b>
          </p>
          <p>
            "No soldier shall, in time of peace be quartered in any house,
            without the consent of the owner, nor in time of war, but in a
            manner to be prescribed by law."
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Fourth Ammendment</h3>
        <div className="legal-rights">
        
          <p>
            <b>
              The goverment may not conduct any searches without a warrant, and
              warrants must be issued by a judge based on probable cause
            </b>
          </p>
          <p>
            "The right of the people to be secure in their persons, houses,
            papers, and effects, against unreasonable searches and seizures,
            shall not be violated"
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Fifth Ammendment</h3>
        <div className="legal-rights">
        
          <p>
            <b>
              Provides that citizens not be subject to criminal prosecution
              without due process. Citizens and Immigrants may not be tried.
            </b>
          </p>
          <p>
            You cannot be tried for the same crime twice, cannot be made a
            witness against yourself, and your private property cannot be taken
            without compensation. You have the right to remain silent.
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Sixth Ammendment</h3>
        <div className="legal-rights">
     
          <p>
            Assures the right to a speedy trial by a jury of one's peers, to be
            informed of the crimes with which one is charged, and to confront
            the witnesses brought forward by the government.
          </p>
          <p>
            Also provides the right to compel testimony from witnesses, as well
            as <b>the right to a lawyer</b> even if you cannot afford legal
            representation.
          </p>
          <br />
          <br />
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Seventh Ammendment</h3>
        <div className="legal-rights">

          <p>
            <b>
              Provides that civil cases preserve the right to trial by jury.
            </b>
          </p>
          <p>
            "In Suits at common law, where the value in controversy shall exceed
            twenty dollars, the right of trial by jury shall be preserved, and
            no fact tried by a jury, shall be otherwise re-examined in any Court
            of the United States, than according to the rules of the common
            law."
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Eighth Ammendment</h3>
        <div className="legal-rights">
    
          <p>
            <b>
              Prohibits excessive bail, excessive fines, and cruel and unusual
              punishments.{" "}
            </b>{" "}
            Bail allows you to leave jail while awaiting trial date in exchange
            for money. You can receieve money back after attending all court
            dates.
          </p>
          <p>
            "Excessive bail shall not be required, nor excessive fines imposed,
            nor cruel and unusual punishments inflicted."
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Ninth Ammendment</h3>
        <div className="legal-rights">
       
          <p>
            <b>
              Simply put, the rights of the people are not <i>only</i> the
              rights written in the Constitution
            </b>
          </p>
          <p>
            "The enumeration in the Constitution, of certain rights, shall not
            be construed to deny or disparage others retained by the people."
          </p>
        </div>
      </div>
      <div className="legal-two-column">
        <h3>Tenth Ammendment</h3>
        <div className="legal-rights">
          
          <p>
            <b>
              Federal Government reach and abilities are limited to that of the
              Constituion. This leaves some power to the states.
            </b>
          </p>
          <p>
            "The powers not delegated to the United States by the Constitution,
            nor prohibited by it to the States, are reserved to the States
            respectively, or to the people."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Legal;
