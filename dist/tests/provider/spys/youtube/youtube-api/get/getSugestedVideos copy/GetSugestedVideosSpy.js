"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSugestedVideosSpy = void 0;
const faker_1 = require("@faker-js/faker");
class GetSugestedVideosSpy {
    constructor() {
        this.result = {
            videos: {
                etag: faker_1.faker.datatype.string(),
                items: [
                    {
                        etag: faker_1.faker.datatype.string(),
                        id: faker_1.faker.datatype.string(),
                        kind: faker_1.faker.datatype.string(),
                        snippet: {
                            channelId: faker_1.faker.datatype.string(),
                            channelTitle: faker_1.faker.datatype.string(),
                            description: faker_1.faker.datatype.string(),
                            localized: {
                                description: faker_1.faker.datatype.string(),
                                title: faker_1.faker.datatype.string(),
                            },
                            publishedAt: faker_1.faker.datatype.string(),
                            title: faker_1.faker.datatype.string(),
                            thumbnails: {
                                default: {
                                    height: faker_1.faker.datatype.number(),
                                    width: faker_1.faker.datatype.number(),
                                    url: faker_1.faker.datatype.string(),
                                },
                                high: {
                                    height: faker_1.faker.datatype.number(),
                                    width: faker_1.faker.datatype.number(),
                                    url: faker_1.faker.datatype.string(),
                                },
                                medium: {
                                    height: faker_1.faker.datatype.number(),
                                    width: faker_1.faker.datatype.number(),
                                    url: faker_1.faker.datatype.string(),
                                },
                            },
                        },
                    },
                ],
                kind: faker_1.faker.datatype.string(),
                pageInfo: {
                    resultsPerPage: faker_1.faker.datatype.number(),
                    totalResults: faker_1.faker.datatype.number(),
                },
            },
        };
    }
    async getSugestedVideos({ channelId, accessToken, }) {
        this.params = { channelId, accessToken };
        return this.result;
    }
}
exports.GetSugestedVideosSpy = GetSugestedVideosSpy;
//# sourceMappingURL=GetSugestedVideosSpy.js.map