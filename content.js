chrome.runtime.onMessage.addListener((message) => {
  const broadcastElement = document.querySelector(".pzp-pc__video");
  const chattingListElement = document.querySelector(".live_chatting_list_wrapper__a5XTV")
  const chattingRankingElement = document.querySelector(".live_chatting_ranking_container__RVHvS")
  const streamerNameElement = document.querySelector(".video_information_link_area__cGbDP")
  const streamerProfileImageElement = document.querySelector(".video_information_thumbnail__KZZ9O")
  const liveNameElement = document.querySelector(".video_information_title__jrLfG")

  if (broadcastElement) {
    broadcastElement.style.filter = message.hide ? "blur(100px)" : "none";
  }

  if(chattingListElement) {
    chattingListElement.style.filter = message.hide ? "blur(100px)" : "none";
  }

  if(chattingRankingElement) {
    chattingRankingElement.style.filter = message.hide ? "blur(100px)" : "none";
  }

  if(streamerNameElement) {
    streamerNameElement.style.filter = message.hide ? "blur(10px)" : "none";
  }

  streamerProfileImageElement.style.filter = message.hide ? "blur(10px)" : "none";
  liveNameElement.style.filter = message.hide ? "blur(10px)" : "none";
});