import * as fs from "fs";
import * as path from "path";
import passport from "passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { PrismaClient } from "../generated/prisma";

const PUB_KEY = fs.readFileSync(
    path.join(__dirname, "..", "..", "id_rsa_pub.pem"),
    "utf-8"
);

const prisma = new PrismaClient();

export default function configAuth() {
    passport.use(
        new Strategy(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: PUB_KEY,
                algorithms: ["RS256"],
                ignoreExpiration: false,
            },
            async (payload, done) => {
                try {
                    const user = await prisma.user.findUnique({
                        where: { id: payload.sub },
                    });

                    if (user) {
                        return done(null, user); // agora `request.user = user`
                    } else {
                        return done(null, false);
                    }
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );
}
