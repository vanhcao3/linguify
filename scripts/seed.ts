const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
  try {
    // await database.category.createMany({
    //   data: [
    //     { name: 'IELTS' },
    //     { name: 'TOEFL' },
    //     { name: 'TOEIC' },
    //     { name: 'Aptis' },
    //     { name: 'SAT' },
    //     { name: 'CAE' },
    //     { name: 'CPE' },
    //     { name: 'KET' },
    //     { name: 'PET' },
    //     { name: 'Foundation' },
    //     { name: 'Elementary' },
    //     { name: 'Pre-intermediate' },
    //     { name: 'Intermediate' },
    //     { name: 'Upper-intermediate' },
    //     { name: 'Advanced' },
    //     { name: 'Proficiency' },
    //     { name: 'Vocabulary Intensive' },
    //     { name: 'Grammar Intensive' },
    //     { name: 'Reading' },
    //     { name: 'Writting' },
    //     { name: 'Speaking' },
    //     { name: 'Listening' },
    //     { name: 'Miscellaneous' },
    //   ],
    // });
    await database.course.createMany({
      data: [
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Effective Business Writing',
        //   description:
        //     'This course is designed to enhance your business writing skills, equipping you with the tools to communicate professionally and effectively in a business environment. Through practical exercises, real-world examples, and personalized feedback, you will learn how to write clear and concise emails, reports, memos, and other business documents. The course will cover grammar and punctuation rules, formatting guidelines, persuasive writing techniques, and strategies for adapting your writing to different audiences and purposes.',
        //   imageUrl: null,
        //   price: 125000,
        //   isPublished: true,
        //   categoryId: 'cff4254a-ff96-4060-89de-33a2b07ca647',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Creative Writing Workshop',
        //   description:
        //     'This workshop-style course is perfect for aspiring writers looking to unlock their creativity and develop their writing skills. Through a combination of writing exercises, prompts, and constructive feedback, you will explore various genres such as fiction, poetry, and non-fiction. The course will cover important elements of storytelling, character development, plot structure, and descriptive writing, enabling you to craft engaging narratives and express your ideas imaginatively.',
        //   imageUrl: null,
        //   price: 100000,
        //   isPublished: true,
        //   categoryId: 'cff4254a-ff96-4060-89de-33a2b07ca647',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Academic Writing Essentials',
        //   description:
        //     'This course focuses on developing your academic writing skills, with a particular emphasis on essays, research papers, and scholarly articles. You will learn how to structure and organize academic writing effectively, integrate research and citations, develop strong arguments, and refine your academic language and style. The course will also cover critical reading skills, academic conventions, and techniques for editing and proofreading your work to meet the standards of academic writing.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: 'cff4254a-ff96-4060-89de-33a2b07ca647',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Writing for the Web: Content Creation and Blogging',
        //   description:
        //     'This course is designed for individuals interested in creating compelling web content, such as blog posts, articles, and online copywriting. You will learn how to write engaging content that captivates readers, optimizes search engine visibility, and drives traffic. The course will cover techniques for writing attention-grabbing headlines, structuring content for online readers, incorporating keywords, and adapting your writing style to different online platforms and audiences.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: 'cff4254a-ff96-4060-89de-33a2b07ca647',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'IELTS Writing Masterclass',
        //   description:
        //     'This intensive course focuses specifically on enhancing your writing skills for the IELTS exam. You will learn advanced writing techniques, practice different types of writing tasks, receive personalized feedback on your writing, and develop strategies to improve your coherence, cohesion, vocabulary usage, and grammar. By the end of the course, you will have gained the confidence and skills to excel in the IELTS Writing module.',
        //   imageUrl: null,
        //   price: 50000,
        //   isPublished: true,
        //   categoryId: 'cff4254a-ff96-4060-89de-33a2b07ca647',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Aptis Speaking and Listening Skills',
        //   description:
        //     'This course is designed to help you develop and refine your speaking and listening skills specifically for the Aptis exam. You will practice various speaking tasks, such as giving presentations, engaging in group discussions, and expressing opinions. The course will also cover effective listening strategies, note-taking techniques, and comprehension exercises to improve your overall listening proficiency. By the end of the course, you will feel confident and well-prepared to excel in the speaking and listening sections of the Aptis exam.',
        //   imageUrl: null,
        //   price: 60000,
        //   isPublished: true,
        //   categoryId: '4c1b9d39-a598-4743-aace-45ef54a6c693',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Aptis Grammar and Vocabulary Booster',
        //   description:
        //     'This course focuses on enhancing your grammar and vocabulary skills for the Aptis exam. You will review and consolidate key grammar concepts, such as tenses, sentence structure, verb forms, and word order. The course will also cover important vocabulary topics and strategies for expanding your word bank. Through interactive exercises, practice tests, and targeted feedback, you will strengthen your language foundation and boost your performance in the grammar and vocabulary sections of the Aptis exam.',
        //   imageUrl: null,
        //   price: 100000,
        //   isPublished: true,
        //   categoryId: '4c1b9d39-a598-4743-aace-45ef54a6c693',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Aptis Reading and Writing Strategies',
        //   description:
        //     'This comprehensive course is designed to improve your reading and writing skills for the Aptis exam. You will practice reading and comprehending different types of texts, such as articles, reports, and essays. The course will focus on developing effective reading strategies, such as skimming, scanning, and identifying key information. Additionally, you will learn how to write coherent and well-structured responses for various writing tasks, including essays, letters, and reports. Through guided practice and expert feedback, you will refine your reading and writing abilities to achieve a higher score in the reading and writing sections of the Aptis exam.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: '4c1b9d39-a598-4743-aace-45ef54a6c693',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'Aptis Full Exam Preparation Course',
        //   description:
        //     'This comprehensive course provides a thorough preparation for the complete Aptis exam. It covers all four language skills: speaking, listening, reading, and writing. The course includes in-depth practice for each section of the exam, familiarizing you with the format, question types, and time constraints. You will receive guidance on test-taking strategies, time management techniques, and effective approaches to answer Aptis questions. By the end of the course, you will be well-equipped to tackle the entire Aptis exam with confidence and achieve your desired score.',
        //   imageUrl: null,
        //   price: 10000,
        //   isPublished: true,
        //   categoryId: '4c1b9d39-a598-4743-aace-45ef54a6c693',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'IELTS Speaking Fluency Workshop',
        //   description:
        //     'This interactive workshop is designed to boost your speaking fluency for the IELTS Speaking module. Through engaging discussions, role-plays, and individual speaking practice, you will enhance your ability to express your ideas clearly, develop coherent arguments, and respond confidently to a wide range of IELTS speaking topics. You will receive expert guidance, feedback, and tips to help you achieve a higher score in the speaking section of the IELTS exam.',
        //   imageUrl: null,
        //   price: 199000,
        //   isPublished: true,
        //   categoryId: '3c0d8816-60cc-470e-a415-4c4265e1a0fa',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'IELTS Listening and Note-taking Strategies',
        //   description:
        //     'This course focuses on improving your listening skills and note-taking techniques for the IELTS Listening module. You will practice listening to various audio materials, develop your ability to identify main ideas, details, and specific information, and learn effective note-taking methods. The course will also provide strategies to overcome common listening challenges, such as different accents and fast-paced speech, helping you to maximize your score in the IELTS Listening section.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: '3c0d8816-60cc-470e-a415-4c4265e1a0fa',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'IELTS Reading Intensive Course',
        //   description:
        //     'This comprehensive course is designed to enhance your reading skills for the IELTS Reading module. You will learn advanced reading strategies, practice different question types, and build your vocabulary and reading speed. Through extensive exposure to diverse reading materials, you will improve your ability to comprehend complex texts, identify key information, and answer questions accurately. This course will prepare you to tackle the challenging reading tasks in the IELTS exam with confidence.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: '3c0d8816-60cc-470e-a415-4c4265e1a0fa',
        // },
        // {
        //   userId: 'clvz0zx5g0000arlvyw5pwmqc',
        //   title: 'IELTS Exam Preparation Bootcamp',
        //   description:
        //     'This intensive bootcamp-style course provides a comprehensive review of all four IELTS modules: Listening, Reading, Writing, and Speaking. You will engage in targeted practice exercises, simulated exam scenarios, and receive personalized feedback from experienced instructors. The course will focus on strengthening your overall language skills, test-taking strategies, time management techniques, and building confidence to perform at your best on the IELTS exam.',
        //   imageUrl: null,
        //   price: null,
        //   isPublished: true,
        //   categoryId: '3c0d8816-60cc-470e-a415-4c4265e1a0fa',
        // },
        {
          userId: 'clvz0zx5g0000arlvyw5pwmqc',
          title: 'Confident Conversation Mastery',
          description:
            "This course will teach you proven techniques to become a more confident and engaging speaker. You'll learn how to overcome public speaking anxiety, improve your vocal delivery, and captivate your audience.",
          imageUrl: null,
          price: null,
          isPublished: true,
          categoryId: '2032de56-756f-4d27-a033-4b10777db242',
        },
        {
          userId: 'clvz0zx5g0000arlvyw5pwmqc',
          title: 'Effective Communication Strategies',
          description:
            'Develop the essential communication skills needed to express your ideas clearly and persuasively. This course covers active listening, body language, and strategies for navigating difficult conversations.',
          imageUrl: null,
          price: 50000,
          isPublished: true,
          categoryId: '2032de56-756f-4d27-a033-4b10777db242',
        },
        {
          userId: 'clvz0zx5g0000arlvyw5pwmqc',
          title: 'Spoken English Fluency Accelerator',
          description:
            "Boost your spoken English proficiency with this comprehensive course. You'll practice pronunciation, intonation, and conversational skills through interactive exercises and real-life role-playing scenarios.",
          imageUrl: null,
          price: 60000,
          isPublished: true,
          categoryId: '2032de56-756f-4d27-a033-4b10777db242',
        },
        {
          userId: 'clvz0zx5g0000arlvyw5pwmqc',
          title: 'Public Speaking for Professionals',
          description:
            "Whether you're presenting to a boardroom or pitching to clients, this course will equip you with the skills to deliver impactful and polished public speeches. Learn how to structure your message, use visual aids effectively, and handle Q&A sessions with confidence.",
          imageUrl: null,
          price: 20000,
          isPublished: true,
          categoryId: '2032de56-756f-4d27-a033-4b10777db242',
        },
        {
          userId: 'clvz0zx5g0000arlvyw5pwmqc',
          title: 'Conversational Leadership',
          description:
            'Discover how to become a more influential and persuasive communicator. This course explores techniques for active listening, asking thought-provoking questions, and leading engaging discussions to inspire and motivate others.',
          imageUrl: null,
          price: null,
          isPublished: true,
          categoryId: '2032de56-756f-4d27-a033-4b10777db242',
        },
      ],
    });
  } catch (error) {
    console.log('Error seeding the database category', error);
  } finally {
    await database.$disconnect();
  }
}

main();
