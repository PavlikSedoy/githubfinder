class Github {
    constructor() {
        this.client_id = '143ef3a47752212a7d1b';
        this.client_secret = '20439aab21c72cb5a5d1dafdc7e3cd73aba0a6f8';
    }

    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}