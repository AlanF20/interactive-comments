import data from "../../data.js";

const {comments} = data
const post = () => {
  const $section = document.createElement("section");
  $section.classList="main__card";
  for(const comment of comments){
    const $div = document.createElement("div")
    $div.classList = "main__card-card"
    $div.innerHTML = `
    <div class="main__card-card-post">
      <div class="main__card-user">
        <div class="main__card-user-img">
          <img src="${comment.user.image.png}" alt="${comment.user.username}">
        </div>
        <p class="main__card-user-name">${comment.user.username}</p>
        <p class="main__card-user-postDate">${comment.createdAt}</p>
      </div>
      <p class="main__card-content">${comment.content}</p>
      <div class="main__card-interaction">
        <div class="main__card-interaction-buttons">
          <button class="main__card-interaction-buttons-plus"><img src="./app/public/images/icons/icon-plus.svg" alt="Like"></button>
          <span class="main__card-interaction-buttons-score">${comment.score}</span>
          <button class="main__card-interaction-buttons-plus"><img src="./app/public/images/icons/icon-minus.svg" alt="Unlike"></button>
        </div>
        <span class="main__card-interaction-reply-inside"><img src="./app/public/images/icons/icon-reply.svg" alt="Reply">Reply</span>
      </div>
      <span class="main__card-interaction-reply-outside"><img src="./app/public/images/icons/icon-reply.svg" alt="Reply">Reply</span>
    </div>
    `
    if(comment.replies.length > 0){
      const {replies} = comment
      console.log(replies)
      for(const reply of replies){
        let $reply = document.createElement("div")
        $reply.classList = "main__card-reply"
        $reply.innerHTML = `
        <div class="main__card-comment">
          <div class="main__card-user">
            <div class="main__card-user-img">
              <img src="${reply.user.image.png}" alt="${reply.user.username}">
            </div>
            <p class="main__card-user-name">${reply.user.username}</p>
            <p class="main__card-user-postDate">${reply.createdAt}</p>
          </div>
          <p class="main__card-content"><a class="main__card-content-userReply">@${reply.replyingTo}</a> ${reply.content}</p>
          <div class="main__card-interaction">
            <div class="main__card-interaction-buttons">
              <button class="main__card-interaction-buttons-plus"><img src="./app/public/images/icons/icon-plus.svg" alt="Like"></button>
              <span class="main__card-interaction-buttons-score">${reply.score}</span>
              <button class="main__card-interaction-buttons-plus"><img src="./app/public/images/icons/icon-minus.svg" alt="Unlike"></button>
            </div>
            <span class="main__card-interaction-reply-inside"><img src="./app/public/images/icons/icon-reply.svg" alt="Reply">Reply</span>
          </div>
          <span class="main__card-interaction-reply-outside"><img src="./app/public/images/icons/icon-reply.svg" alt="Reply">Reply</span>
        </div>
        `
        $div.appendChild($reply)
      }
    }
    $section.appendChild($div)
  }
  return $section
};

export default post