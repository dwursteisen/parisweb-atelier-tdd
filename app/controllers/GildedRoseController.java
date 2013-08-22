package controllers;

import models.GildedRose;
import models.Item;
import play.mvc.Controller;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: david
 * Date: 22/08/13
 * Time: 11:25
 * To change this template use File | Settings | File Templates.
 */
public class GildedRoseController extends Controller {

    private static final String NOMBRE_ITERATION_SESSION_KEY = "nombreIteration";

    public static void javaVersion() {

        GildedRose inn = new GildedRose();
        updateTheInn(inn);

        List<Item> items = inn.getItems();
        render(items);

    }

    public static void iteration() {
        session.put("nombreIteration", getNombreIteration() + 1);
        javaVersion();
    }

    private static void updateTheInn(GildedRose inn) {
        int nombreIteration = getNombreIteration();
        for (int i = 0; i < nombreIteration; i++) {
            inn.updateQuality();
        }
    }

    private static int getNombreIteration() {
        int nombreIteration = 0;
        String nombreIterationAsString = session.get(NOMBRE_ITERATION_SESSION_KEY);
        if(nombreIterationAsString != null) {
            nombreIteration = Integer.parseInt(nombreIterationAsString);
        }
        return nombreIteration;
    }

    public static void killSession() {
        session.clear();
        javaVersion();
    }

    public static void javascriptVersion() {
        render();
    }
}
