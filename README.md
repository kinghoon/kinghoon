지속적 성장을 추구하는 인재
프로젝트를 수행함에 있어서, 내 할 일에 최선을 다하는 동시에, 조용하지만 깊은 사고를 통해 창의적인 해결책을 찾아내는 것을 좋아합니다. 
내성적인 기질은 저를 더 꼼꼼하고 신중하게 만들며, 이는 저의 개발 작업에도 잘 반영됩니다. 조직의 목표 달성을 위해 끝까지 책임지는 태도와 상호 작용의 중요성을 인식하며, 
팀과의 소통 능력 향상을 위해 지속적으로 노력하고 있습니다.

## 🛠 기술 스택

# 기술 이름과 숙련도 재정의
categories = ['JavaSpring', 'HTML/CSS', 'JavaScript', 'React.js', 'TypeScript.js', 'OracleSQL', 'MySQL']
scores = [2, 2, 2, 1, 1, 2, 1]

# 레이더 차트를 위한 데이터와 각도 준비
labels = np.array(categories)
num_vars = len(labels)

# 각도 계산
angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()

# 레이더 차트는 원형이므로 리스트의 끝에 시작점을 다시 추가
scores += scores[:1]
angles += angles[:1]

fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))

# 그리기
ax.fill(angles, scores, color='blue', alpha=0.25)
ax.plot(angles, scores, color='blue', linewidth=2)

# 레이블 추가
ax.set_xticks(angles[:-1])
ax.set_xticklabels(labels)

# y축 범위 설정
ax.set_yticklabels([])
ax.set_ylim(0, 3)

plt.show()


### 언어 및 프레임워크

![Java](https://img.shields.io/badge/-Java-%23ED8B00?style=flat-square&logo=java&logoColor=white)
![Spring](https://img.shields.io/badge/-Spring-%236DB33F?style=flat-square&logo=spring&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-%2361DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?style=flat-square&logo=typescript&logoColor=white)


### 데이터베이스

![Oracle](https://img.shields.io/badge/-Oracle-%23F80000?style=flat-square&logo=oracle&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-%234479A1?style=flat-square&logo=mysql&logoColor=white)

### 도구 및 기타

![Git](https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-%23181717?style=flat-square&logo=github&logoColor=white)

## 📈 GitHub 통계

![당신의 GitHub 통계](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true)

## 📫 연락하기


- Email: win3937@naver.com
