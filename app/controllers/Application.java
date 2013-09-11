package controllers;

import models.Game;
import play.cache.Cache;
import play.jobs.Job;
import play.jobs.OnApplicationStart;
import play.mvc.Controller;

import java.util.Random;

public class Application extends Controller {

    private static final Random rand = new Random();


    public static void home() {
        render();
    }
    public static void index() {
        Game game = retrieveGame();
        boolean notAWinner = true;
        render(game, notAWinner);
    }

    public static void add(String player) {
        retrieveGame().add(player);
        index();
    }

    public static void roll(int roll) {
        Game game = retrieveGame();
        game.roll(roll);
        boolean notAWinner;
        if (rand.nextInt(9) == 7) {
            notAWinner = game.wrongAnswer();
        } else {
            notAWinner = game.wasCorrectlyAnswered();
        }
        renderTemplate("@Application.index", game, notAWinner);

    }

    private static Game retrieveGame() {
        Game game = Cache.get("game", Game.class);
        if(game == null) {
            game = new Game();
            Cache.set("game", game);
        }
        return game;
    }

    @OnApplicationStart
    public static class Bootstrap extends Job {

        @Override
        public void doJob() throws Exception {
            retrieveGame();
        }
    }


}