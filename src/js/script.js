const stories = document.querySelector('.stories');
const storyLeft = document.querySelector('.story-left');
const storyRight = document.querySelector('.story-right');


storyLeft.addEventListener('click', () => {
  stories.scrollTo({
    left: stories.scrollLeft - 150,
    behavior: 'smooth'
  })

  if (stories.scrollLeft === 0) {
    storyLeft.style.display = "none"
  } else {
    storyLeft.style.display = "flex"
  }
});

storyRight.addEventListener('click', () => {
  stories.scrollTo({
    left: stories.scrollLeft + 150,
    behavior: 'smooth'
  })

  if (stories.scrollLeft > 100) {
    storyRight.style.display = "none"
  } else {
    storyRight.style.display = "flex"
  }
});