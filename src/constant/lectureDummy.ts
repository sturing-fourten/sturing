import mongoose from "mongoose";
import connectDB from "../lib/database/db";
import { Lecture } from "../schema/lectureSchema";

const seedLectures = async () => {
  await connectDB();

  const lectures = [
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.7,
      link: "https://udemy.com/course/best-100-days-python/",
      title: "【한글자막】Python 부트캠프 : 100개의 프로젝트로 Python 개발 완전 정복",
      instructor: "Dr. Angela Yu, Developer and Lead Instructor, 웅진씽크빅 글로벌",
      level: "모든 수준",
      tag: ["개발", "Python", "총 65시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "karina",
          comment: "파이썬에 대해 자세히 알 수 있어서 좋았던 것 같습니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "winter",
          comment:
            "재밌는 프로젝트를 수행하며 파이썬을 배울 수 있어 좋아요. 다만 추후에 강의 없이 진행되는 과제, 강의가 많아, 그런 것들은 학습하기 어려울거 같아요.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "giselle",
          comment:
            "아무것도 모르는 사람인데 할 수 있을 정도로 강사가 매우 섬세합니다. 대신 하루 한시간은 힘들고, 두 세시간 정도를 투자해야 (때로는 며칠 걸리는 프로젝트도 있었음) 하루 목표를 완성할 수 있었습니다.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "ningning",
          comment: "Yes, Angela best teacher !! python projects and theory combination is very good !!",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.6,
      link: "https://udemy.com/course/best-react/",
      title: "【한글자막】 React 완벽 가이드 2024 with React Router & Redux",
      instructor: "Academind by Maximilian, Maximilian, 웅진씽크빅 글로벌",
      level: "초급자",
      tag: ["개발", "React", "총 69.5시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "wonyoung",
          comment: "리액트가 뭔지 확실히 이해가 되고, 프론트엔드 개발자를 꿈꾸고 있는 분들에게 적극 추천합니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "AN YUJIN",
          comment: "잘 듣고 있습니다.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "REI",
          comment: "Gooooooood !!!!!",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "LIZ",
          comment:
            "강의 업데이트도 해주고 차근차근 설명도 잘해주고 기존에 어느정도 배운 내용이었지만 복습 및 새로운 지식도 얻어갑니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.7,
      link: "https://www.udemy.com/course/the-web-developer-bootcamp-2021-korea/",
      title: "【한글자막】 The Web Developer 부트캠프 2024",
      instructor: "Colt Steele, 웅진씽크빅 글로벌",
      level: "모든 수준",
      tag: ["개발", "HTML", "CSS", "JavaScript", "Node.js", "총 73.5시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "JISOO",
          comment: "국비과정 수강 전에 듣기 좋습니다. 매우 추천합니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "jennie",
          comment: "번역의 퀄리티가 조금 더 높았으면 한다.",
          rating: 3,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "rose",
          comment: "강의와 관련 없는 얘기가 너무 많음.",
          rating: 1,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "LISE",
          comment: "강사님의 말 솜씨가 재미있어서 즐겁다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.7,
      link: "https://www.udemy.com/course/100-2022-web-development/",
      title: "【한글자막】 100일 코딩 챌린지 - Web Development 부트캠프",
      instructor: "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller, Manuel Lorenz, 웅진씽크빅 글로벌",
      level: "모든 수준",
      tag: ["개발", "HTML", "CSS", "JavaScript", "Node.js", "Express", "총 79시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "MINJI",
          comment: "글쎄요, 개발에 대해 완전히 문외한인 저에게는 소금과도 같은 강의였습니다. 고마워요!",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "HANNI",
          comment: "번역의 퀄리티가 조금 더 높았으면 한다.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "DANIELLE",
          comment: "feels like I actually can be a junior web developer after this course!",
          rating: 1,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "HAERIN",
          comment: "웹 개발 처음 시작하는 분은 이 강의를 듣는 것을 추천합니다~ ",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "HYEIN",
          comment:
            "강사 두 명이 파트 나눠서 강의를 진행하는데 , Max 강사님은 괜찮은데 다른 한분이 횡설수설하거나 실수가 좀 잦으심.",
          rating: 3,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.7,
      link: "https://www.udemy.com/course/clean-code-js/",
      title: "클린코드 자바스크립트(JavaScript)",
      instructor: "Poco Jang",
      level: "중급자",
      tag: ["개발", "JavaScript", "클린코드", "총 11시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "사쿠라",
          comment: "속이 시원해지는 강의입니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "김채원",
          comment: "모바일에서도 가로모드 보기가 편하네요.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "허윤진",
          comment: "기초를 다루는 데 탁월하다",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "카즈하",
          comment: "필요하다고 생각했던 부분을 잘 알려주셨습니다. 감사합니다 :)",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "홍은채",
          comment:
            "기본적인 JS 지식이 있어야 하는 강의. 반복적인 내용도 있긴 하지만 실제 개발에서 쓸 일이 많을 것 같은 내용이 많습니다.",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
    {
      online: true,
      category: "develop",
      platform: "Udemy",
      rating: 4.7,
      link: "https://www.udemy.com/course/best-git-github/",
      title: "【한글자막】 Git & Github 실무 활용 완벽 가이드",
      instructor: "Colt Steele, 웅진씽크빅 글로벌",
      level: "초급자",
      tag: ["개발", "Git", "Github", "총 17시간"],
      lectureStudyList: [], // 스터디 리스트 추가
      review: [
        {
          reviewer: "나연",
          comment:
            "배우면서도 나중에 다시 와서 참고할 내용이 많아요. 아직은 무엇이라 표현할지 모르겠네요 아무튼 좋아요!",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "사나",
          comment: "Colt Steele은 정말 최고입니다!",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "모모",
          comment: "좋습니다. 열심히 공부하겠습니다.",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "쯔위",
          comment: "GIt 에 대해서 자세하게 알수 있는 강의 였습니다",
          rating: 5,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
        {
          reviewer: "다현",
          comment: "유익한 강의 잘 듣고 있습니다",
          rating: 4,
          createdAt: { $date: "2024-07-05T00:00:00Z" },
        },
      ],
    },
  ];

  await Lecture.insertMany(lectures);
  console.log("Lectures inserted successfully");
};

seedLectures()
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
