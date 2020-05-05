const icons = {
    firstName: 'fas fa-user',
    user: 'fas fa-user',
    users: 'fas fa-users',
    lastName: 'fas fa-signature',
    password: 'fas fa-lock',
    passwordAgain: 'fas fa-lock',
    email: 'fas fa-envelope',
    companyName: 'fas fa-building',
    address: 'fas fa-map-marker-alt',
    education: 'fas fa-user-graduate',
    university: 'fas fa-user-graduate',
    date: 'far fa-calendar-alt',
    time: 'far fa-clock',
    projectName: 'fas fa-project-diagram',
    project: 'fas fa-project-diagram',
    title: 'fas fa-heading',
    description: 'fas fa-list-ol',
    assignee: 'fa fa-user',
    sprintName: 'fas fa-users-cog',
    sprint: 'fas fa-users-cog',
    dashboard: 'fas fa-chart-line',
    issue: 'fas fa-exclamation'
};


export class ConsoleButton {
    public icon = 'fas fa-signature';
    public title: string;



    constructor(
        public id: string,
        public value: string,
        public route: string,
        public color: string = 'primary'
    ) {
        this.title = this.value;
        this.icon = icons[this.id];
    }
}


