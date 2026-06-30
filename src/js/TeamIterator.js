export default class TeamIterator {
    constructor() {
        this.members = [];
    }

    add(character) {
        this.members.push(character);
    }

    [Symbol.iterator]() {
        let index = 0;
        const { members } = this;

        return {
            next() {
                if (index < members.length) {
                    return {
                        value: members[index++],
                        done: false,
                    };
                }
                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    }
}