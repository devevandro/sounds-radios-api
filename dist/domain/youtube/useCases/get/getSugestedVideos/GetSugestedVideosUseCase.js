"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSugestedVideosUseCase = void 0;
class GetSugestedVideosUseCase {
    constructor(getSugestedVideos) {
        this.getSugestedVideos = getSugestedVideos;
    }
    async execute({ channelId, accessToken }) {
        const sugestedVideo = await this.getSugestedVideos.getSugestedVideos({
            channelId,
            accessToken,
        });
        return sugestedVideo;
    }
}
exports.GetSugestedVideosUseCase = GetSugestedVideosUseCase;
//# sourceMappingURL=GetSugestedVideosUseCase.js.map