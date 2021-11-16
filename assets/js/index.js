function openCurriculum(){
  window.open('./assets/pdf/curriculum-pt_br.pdf', '_blank')
}

function animateBackground() {
  const animationControler = new AnimationControler()
  animationControler.startAnimation()
}

function animateSkills() {
  const skillsAnimationController = new SkillsAnimationController()
  skillsAnimationController.startAnimation()
}

animateBackground()
animateSkills()