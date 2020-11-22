import React from "react";
import "./style/storyReel.css";
import Story from "./story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wikimania_Hackathon_2018_-_Introduction_to_Wikimedia_technical_areas_and_projects.pdf/page1-120px-Wikimania_Hackathon_2018_-_Introduction_to_Wikimedia_technical_areas_and_projects.pdf.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Danijela_Da%C5%A1a_Petkovi%C4%87_-_actors.jpg/120px-Danijela_Da%C5%A1a_Petkovi%C4%87_-_actors.jpg"
        title="Catherina Brown"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/PUNTA_CANA_TRAVEL_TIPS.png/120px-PUNTA_CANA_TRAVEL_TIPS.png"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dan_Jeannotte_at_the_2013_CFC_Actors_Showcase_%2812973028105%29.jpg/85px-Dan_Jeannotte_at_the_2013_CFC_Actors_Showcase_%2812973028105%29.jpg"
        title="John Doe"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Productivity_tips%21.jpg/120px-Productivity_tips%21.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Actors_Nick_Hardcastle_and_Bonnie_Ferguson.jpg/120px-Actors_Nick_Hardcastle_and_Bonnie_Ferguson.jpg"
        title="Joe Moe"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Eastern_greenish_black-tip_%28Euchloe_penia%29_underside_Macedonia.jpg/120px-Eastern_greenish_black-tip_%28Euchloe_penia%29_underside_Macedonia.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/ActorShankar.jpg/80px-ActorShankar.jpg"
        title="Jack Donn"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Q_Tips_plain_BG.jpg/101px-Q_Tips_plain_BG.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Actor_Juan_Falc%C3%B3n_a%C3%B1o_1997_%28cropped%29.jpg/104px-Actor_Juan_Falc%C3%B3n_a%C3%B1o_1997_%28cropped%29.jpg"
        title="Karl Wedn"
      />
    </div>
  );
}

export default StoryReel;
