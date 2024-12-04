export interface Schedule {
    scheduleId: number;
    teacher: { teacherId: number }; // Alterado para objeto com ID
    subject: { subjectId: number }[]; // Mantido como um array de objetos com IDs
    time: { timeId: number }; // Alterado para objeto com ID
    room: { roomId: number }; // Alterado para objeto com ID
    course: { courseId: number }; // Alterado para objeto com ID
    weekDay: string;  // Campo para o dia da semana
    createAt?: string;
    updateAt?: string;
  }
  
  export interface Teacher {
    teacherId: number;
    teacherName: string;
  }
  
  export interface Subject {
    subjectId: number;
    subjectName: string;
  }
  
  export interface Room {
    roomId: number;
    roomName: string;
    roomNumber: string;
    roomFloor: string;
  }
  
  export interface Time {
    timeId: number;
    startTime: string;
    endTime: string;
  }
  
  export interface Course {
    courseId: number;
    courseName: string;
    courseSemester: string;
    coursePeriod: string;
    courseSubjects: { subjectId: number }[];
  }
  