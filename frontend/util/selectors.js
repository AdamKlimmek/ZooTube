export const filterVideos = (videos, filterCriterion) => (
    videos.filter(video => video.id !== filterCriterion)
);

// export const shuffleVideos = (videos) => {
//     let currentIndex = videos.length, temporaryValue, randomIndex;

//     while (0 !== currentIndex) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = videos[currentIndex];
//         videos[currentIndex] = videos[randomIndex];
//         videos[randomIndex] = temporaryValue;
//     }
//     return videos;
// }
