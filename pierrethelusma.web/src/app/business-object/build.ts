export class Build {
    public major: string
    public minor: string
    public patch: string

    constructor(build) {
        this.major = build.major;
        this.minor = build.minor;
        this.patch = build.patch;
    }

    public getSemanticVersion() : string {
        return `${this.major}.${this.minor}.${this.patch}`;
    }
}
