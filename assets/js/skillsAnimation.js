const SkillsAnimationControllerStatus = {
  Writing: 1,
  Waiting: 2,
  Next: 3,
}

class SkillsAnimationController {
  skills = ['VueJs', 'Golang', 'Python', 'Data Science', 'Tensorflow']
  letterWriteDuration = 300 // miliseconds

  constructor() {
    this.skillsHTML = document.getElementById('skills')
    this.status = SkillsAnimationControllerStatus.Next
    this.skillIndex = 0
  }

  getNextSkill() {
    if (this.skillIndex === this.skills.length) {
      this.skillIndex = 0
    }
    const skill = this.skills[this.skillIndex]
    this.skillIndex += 1
    return skill
  }

  static _animate(self) {
    return () => {
      if (self.status === SkillsAnimationControllerStatus.Next) {
        self.status = SkillsAnimationControllerStatus.Writing
        const skill = self.getNextSkill()
        self._writeWord(skill)
      }
      requestAnimationFrame(SkillsAnimationController._animate(self))
    }
  }

  _writeWord(skill) {
    let letterIndex = 0
    const skillInterval = setInterval(() => {
      this.skillsHTML.innerHTML += skill[letterIndex]
      letterIndex += 1
      if (letterIndex === skill.length) {
        clearInterval(skillInterval)
        setTimeout(() => {
          this._eraseWord(skill)
        }, 1000)
      }
    }, this.letterWriteDuration)
  }

  _eraseWord(skill) {
    let letterIndex = skill.length
    const skillInterval = setInterval(() => {
      this.skillsHTML.innerHTML = skill.slice(0, letterIndex)
      letterIndex -= 1
      if (letterIndex < 0) {
        clearInterval(skillInterval)
        setTimeout(() => {
          this.status = SkillsAnimationControllerStatus.Next
        }, 1000)
      }
    }, this.letterWriteDuration)
  }

  startAnimation() {
    requestAnimationFrame(SkillsAnimationController._animate(this))
  }
}