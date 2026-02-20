class student{
  String? name;
  int? age;
  String? course;
  student(String name, int age, String course){
    this.name = name;
    this.age = age;
    this.course = course;
  }
  void display(){
    print("Name: ${this.name}");
    print("Age: ${this.age}");
    print("Course: ${this.course}");
  }
}