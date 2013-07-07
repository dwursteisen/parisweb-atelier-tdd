package controllers;

import models.Game;
import play.cache.Cache;
import play.jobs.Job;
import play.jobs.OnApplicationStart;
import play.mvc.Controller;

public class Application extends Controller {


    public static void index() {
        render();
    }

    public static void add(String player) {
        Cache.get("game", Game.class).add(player);
        index();
    }

    public static void roll(int roll) {
        Cache.get("game", Game.class).roll(roll);
        index();

    }

    @OnApplicationStart
    public static class Bootstrap extends Job {

        @Override
        public void doJob() throws Exception {
            Cache.set("game", new Game());
        }
    }


}