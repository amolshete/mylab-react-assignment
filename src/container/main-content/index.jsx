import React from 'react'
import './style.css'
import {InfoBox} from '../../components/info-box/infoBox'

export const HomePage = () => {
    return (
        <div className="homePage">
          <div className="homePageTitle">
              <span>
              Lorem Ipsum
              </span>
              </div>
              <div className="infoBoxClass">
          <InfoBox
          stepText="Step"
          stepTextNumber={1}
          textDescription="Lorem Ipsum is"
          textInput= {true}
          />
          <InfoBox
          stepText="Step"
          stepTextNumber={2}
          textDescription="Lorem Ipsum"
          textInput= {false}
          />
          <InfoBox
          stepText="Step"
          stepTextNumber={3}
          textDescription="Lorem"
          textInput= {false}
          progressBar={true}
          infoBaseClass="infoGraphClass"
          stepTextNumberColor="stepTextNumberGraphColor"
          stepTextColor="stepTextGraphColor"
          textDescriptionColor = "textDescriptionColorClass"
          />
              </div>
        </div>
    )
}