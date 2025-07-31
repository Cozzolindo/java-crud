package com.carlos.crud_spring.enums;

public enum Status {
  AVAILABLE("Available"),
  UNAVAILABLE("Unavailable");

  private String value;


    // Private so the information isnt exposed in the API
    private Status(String value) {
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
