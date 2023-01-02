import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from "@mui/icons-material/Tune";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/rvcB-tXoQ3SE-yq5HvaDU7d7i1X--Vgs_j8gwt_XGHJLnFourofmeMSMpJ8eww_w2U3Gn0E7Uw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="CodeHelp- by Babbar"
        subs="283K"
        noOfVideos={102}
        verified
        description="Hi Everyone, This Video is an introductory video for the upcoming Complete Placement DSA course. Discord Server Link: https://discord.gg/feSQvVXMrd Course Flow: https://whimsical.com/dsa-4-pla..."
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/an_webp/_RS78xr2Dc4/mqdefault_6s.webp?du=3000&sqp=CNz99pwG&rs=AOn4CLDOy106K0uJ8lFeBKUmw5DFLdUMEw"
        title="Last Lecture: Master-Slave Architecture || DBMS for Placements"
        channel="CodeHelp"
        view="14K"
        timestamp="1 month ago"
        subs="450K"
        description="This Video will make your understand about Master-Slave DBMS Concept. There is a lot to learn, Keep in mind “ Mnn bhot karega ..."
        channelImage="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
      />

      <VideoRow
        image="https://i.ytimg.com/an_webp/EIl02n-FxTg/mqdefault_6s.webp?du=3000&sqp=COik95wG&rs=AOn4CLDZBxA9TbGKGL7pPQ8sFQ6Z1AXHOA"
        title="This Video will make your understand about Master-Slave DBMS Concept. There is a lot to learn, Keep in mind “ Mnn bhot karega ..."
        channel="CodeHelp"
        view="263K"
        timestamp="3 days ago"
        subs="450K"
        description="https://i.ytimg.com/an_webp/EIl02n-FxTg/mqdefault_6s.webp?du=3000&sqp=COik95wG&rs=AOn4CLDZBxA9TbGKGL7pPQ8sFQ6Z1AXHOA"
        channelImage="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
      />

      <VideoRow
        image="https://i.ytimg.com/vi/WQoB2z67hvY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAOg1uKVLJrHoxKL67vFUDHsUmGag"
        title="Lecture 1: Intro to Programming & Flowcharts"
        channel="CodeHelp"
        view="263K"
        timestamp="3 days ago"
        subs="450K"
        description="In this Video, we will understand the Basics of Programming, we will create a lot of Flowcharts, also try some PseudoCodes.
        "
        channelImage="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
      />

      <VideoRow
        image="https://i.ytimg.com/an_webp/1t9oLLurpE0/mqdefault_6s.webp?du=3000&sqp=CPyU95wG&rs=AOn4CLDbwqZFEHCBdxU33ZqKSFUj0vYewQ"
        title="BCA / MCA Student Cracked MICROSOFT || Farmer's Son DREAM Placement"
        channel="CodeHelp"
        view="263K"
        timestamp="3 days ago"
        subs="450K"
        description="Hey everyone! In today's video, We have a special Guest, who comes from a small Village situated in Bihar. He is going to share ...
        New"
        channelImage="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
      />

      <VideoRow
        image="https://i.ytimg.com/an_webp/Wdjr6uoZ0e0/mqdefault_6s.webp?du=3000&sqp=CMyM95wG&rs=AOn4CLD5EJI3G3uVD_QqZVNnkJBvpeFuGg"
        title="Lecture22: All about Char Arrays, Strings & solving LeetCode Questions"
        channel="CodeHelp"
        view="263K"
        timestamp="3 days ago"
        subs="450K"
        description="In this Video, we are going to learn about char arrays, strings and solve the following questions: - Length of String - Reverse a ...
        CC"
        channelImage="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
      />
    </div>
  );
}

export default SearchPage;
