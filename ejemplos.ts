class Persona2{
    private name: string;
    private lastname: string;

    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }
getName(): string {
    return this.name;
}
setName(name: string): void {
    this.name = name;
}
getLastname(): string {
    return this.lastname;
}
setLastname(lastname: string): void {
    this.lastname = lastname;
}

sayHi(): void {
    console.log(`Hello, my name is ${this.getfullName()}`);
}

private getfullName(): string {
    return `${this.getName()} ${this.getLastname()}`;
}

}