{
  // Union이 or의 개념이라면 Intersection은 and의 개념

  type Student = {
    name: string;
    score: number;
  }

  type Worker = {
    employeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {

    // person은 Student와 Worker가 합해진 타입
    console.log(person.score, person.employeId)
  }

  // 호출할 때는 Student와 Worker의 모든 속성을 포함해야 한다
  internWork({ name: 'Ji', score: 11, employeId: 11, work: () => { } })
}