package com.carlos.crud_spring.enums;

public enum Genre {
    FICTION("Fiction"),
    NON_FICTION("Non-Fiction"),
    MYSTERY("Mystery"),
    FANTASY("Fantasy"),
    SCIENCE_FICTION("Science Fiction"),
    BIOGRAPHY("Biography"),
    HISTORY("History"),
    ROMANCE("Romance"),
    THRILLER("Thriller"),
    HORROR("Horror"),
    MANGA("Manga");

    private String value;


    // Private so the information isnt exposed in the API
    private Genre(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
    @Override
    public String toString() {
      return value;
    }
}
