var uiCodes = [
  {
    "imgPath": "/src/images/crm_dashboard_01.png",
    "bgColor": "#f2f5f9",
    "code": `a!localVariables(
      local!documents: {
        a!map(id: 1, docId: 100),
        a!map(id: 2, docId: 101),
        a!map(id: 3, docId: 102),
        a!map(id: 4, docId: 103)
      },
      a!headerContentLayout(
        backgroundColor: "#f2f5f9",
        contents: {
          a!columnsLayout(
            columns: {
              a!columnLayout(
                contents: {
                  a!cardLayout(
                    shape: "ROUNDED",
                    padding: "NONE",
                    showBorder: false,
                    contents: {
                      a!columnsLayout(
                        showDividers: true,
                        columns: {
                          a!columnLayout(
                            width: "4X",
                            contents: {
                              a!cardLayout(
                                showBorder: false,
                                padding: "STANDARD",
                                contents: {
                                  a!imageField(
                                    align: "CENTER",
                                    style: "AVATAR",
                                    size: "MEDIUM",
                                    images: { a!userImage(user: { loggedInUser() }) }
                                  ),
                                  a!richTextDisplayField(
                                    align: "CENTER",
                                    value: {
                                      a!richTextItem(
                                        style: "STRONG",
                                        size: "MEDIUM_PLUS",
                                        text: { "Samantha Montgomery" }
                                      ),
                                      char(10),
                                      a!richTextItem(color: "#a6a5ab", text: { loggedInUser() }),
                                      char(10),
                                      char(10),
                                      a!richTextItem(
                                        style: "STRONG",
                                        size: "MEDIUM",
                                        color: "#5c5a66",
                                        text: { "Tasks" }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    showDividers: true,
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            align: "CENTER",
                                            value: {
                                              a!richTextItem(size: "LARGE", style: "STRONG", text: { "5" }),
                                              char(10),
                                              a!richTextItem(
                                                size: "",
                                                color: "#a6a5ab",
                                                text: { "Pending" }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            align: "CENTER",
                                            value: {
                                              a!richTextItem(size: "LARGE", style: "STRONG", text: { "3" }),
                                              char(10),
                                              a!richTextItem(
                                                size: "",
                                                color: "#a6a5ab",
                                                text: { "Completed" }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!cardLayout(
                                    shape: "ROUNDED",
                                    showBorder: false,
                                    marginAbove: "STANDARD",
                                    padding: "",
                                    style: "#255ed6",
                                    contents: {
                                      a!richTextDisplayField(
                                        align: "CENTER",
                                        value: {
                                          a!richTextItem(size: "MEDIUM", text: { "View Tasks" })
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          a!columnLayout(
                            width: "6X",
                            contents: {
                              a!cardLayout(
                                showBorder: false,
                                padding: "STANDARD",
                                contents: {
                                  a!columnsLayout(
                                    spacing: "SPARSE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Gender" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "Male" }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Birthday" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "25 Oct, 1994" }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    marginAbove: "NONE",
                                    marginBelow: "NONE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    spacing: "SPARSE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Phone No." }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "(023) 222-333" }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Address" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: {
                                                  "123 Main Street, Cityville, Sample State, PIN Code: 123456"
                                                }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    marginAbove: "NONE",
                                    marginBelow: "NONE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    spacing: "SPARSE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "City" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "ABC City" }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Pin Code" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "123456" }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    marginAbove: "NONE",
                                    marginBelow: "NONE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!sectionLayout(
                                            divider: "ABOVE",
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            contents: {}
                                          )
                                        }
                                      )
                                    }
                                  ),
                                  a!columnsLayout(
                                    spacing: "SPARSE",
                                    columns: {
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Registration Date" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "11 Nov, 2023" }
                                              )
                                            }
                                          )
                                        }
                                      ),
                                      a!columnLayout(
                                        contents: {
                                          a!richTextDisplayField(
                                            value: {
                                              a!richTextItem(
                                                color: "#a6a5ab",
                                                style: "STRONG",
                                                text: { "Status" }
                                              ),
                                              char(10),
                                              char(10),
                                              a!richTextItem(
                                                color: "#64636e",
                                                style: "STRONG",
                                                text: { "Active" }
                                              )
                                            }
                                          )
                                        }
                                      )
                                    }
                                  ),
    
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              ),
              a!columnLayout(
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            shape: "ROUNDED",
                            padding: "STANDARD",
                            showBorder: false,
                            height: "EXTRA_TALL",
                            contents: {
                              a!sideBySideLayout(
                                alignVertical: "MIDDLE",
                                items: {
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          size: "MEDIUM",
                                          style: "STRONG",
                                          text: { "Notes",  }
                                        )
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextItem(
                                          linkStyle: "STANDALONE",
                                          color: "#255ed6",
                                          style: "STRONG",
                                          text: { "See all" }
                                        )
                                      }
                                    )
                                  )
                                }
                              ),
                              a!cardLayout(
                                shape: "ROUNDED",
                                showBorder: false,
                                style: "#f2f5f9",
                                padding: "STANDARD",
                                contents: {
                                  a!richTextDisplayField(
                                    marginBelow: "MORE",
                                    value: {
                                      a!richTextItem(
                                        text: {
                                          "Our legal team has thoroughly reviewed the case [Case Name] and recommends the following actions:
    1. [List of actions to be taken, e.g., filing a motion, conducting depositions, seeking a settlement]
    2. [Include any relevant details, such as case numbers, key dates, or specific legal procedures]
    3. [Mention any supporting documents or evidence that have been gathered]
    Thank you for your cooperation in this important legal matter.",
                                          char(10),
                                          char(10),
    
                                        }
                                      )
                                    }
                                  ),
                                  a!buttonLayout(
                                    primaryButtons: {
                                      a!buttonWidget(label: "Edit Note", style: "PRIMARY")
                                    }
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                marginAbove: "STANDARD",
                                value: {
                                  a!richTextItem(style: "STRONG", text: { "Note 1" })
                                }
                              ),
                              a!sideBySideLayout(
                                alignVertical: "MIDDLE",
                                items: {
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: {
                                        a!richTextIcon(icon: { "user-o" }, color: "#255ed6")
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(color: "#a6a5ab", text: { "Dr. Kalvish" })
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextItem(color: "#a6a5ab", text: { "12 Nov, 23" })
                                      }
                                    )
                                  )
                                }
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            showBorder: false,
                            shape: "ROUNDED",
                            padding: "STANDARD",
                            height: "EXTRA_TALL",
                            contents: {
                              a!sideBySideLayout(
                                alignVertical: "MIDDLE",
                                marginBelow: "MORE",
                                items: {
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          size: "MEDIUM",
                                          style: "STRONG",
                                          text: { "Files / Documents" }
                                        )
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextIcon(
                                          size: "MEDIUM_PLUS",
                                          color: "#255ed6",
                                          icon: { "file-medical" }
                                        )
                                      }
                                    )
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextItem(
                                          size: "",
                                          style: "STRONG",
                                          linkStyle: "STANDALONE",
                                          color: "#255ed6",
                                          text: { "Add File" }
                                        )
                                      }
                                    ),
                                    width: "MINIMIZE"
                                  )
                                }
                              ),
                              a!forEach(
                                items: local!documents,
                                expression: {
                                  a!cardLayout(
                                    showShadow: true,
                                    shape: "ROUNDED",
                                    showBorder: false,
                                    marginBelow: "STANDARD",
                                    padding: "STANDARD",
                                    contents: {
                                      a!sideBySideLayout(
                                        alignVertical: "MIDDLE",
                                        items: {
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              value: {
                                                a!richTextIcon(
                                                  color: "#a6a5ab",
                                                  size: "MEDIUM",
                                                  icon: { "file-text-o" }
                                                )
                                              }
                                            ),
                                            width: "MINIMIZE"
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              value: {
                                                a!richTextItem(
                                                  color: "#a6a5ab",
                                                  style: "STRONG",
                                                  text: {
                                                    document(index(fv!item, "docId", {}), "name")
                                                  }
                                                ),
                                                ".",
                                                a!richTextItem(
                                                  color: "#a6a5ab",
                                                  style: "STRONG",
                                                  text: {
                                                    document(index(fv!item, "docId", {}), "extension")
                                                  }
                                                )
                                              }
                                            ),
                                            width: "MINIMIZE"
                                          ),
                                          a!sideBySideItem(
                                            item: a!richTextDisplayField(
                                              align: "RIGHT",
                                              value: {
                                                a!richTextItem(
                                                  color: "#a6a5ab",
                                                  style: "STRONG",
                                                  text: {
                                                    document(index(fv!item, "docId", {}), "size"),
                                                    " kb"
                                                  }
                                                ),
    
                                              }
                                            )
                                          )
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  ),
    
                }
              )
            }
          ),
    
        }
      ),
    
    )`
  },
  {
    "imgPath": "/src/images/investment_performance.png",
    "bgColor": "#f2f3f7",
    "code": `a!localVariables(
      local!selectionColor: "#282e87",
      local!defaultColor: "#90939e",
      local!positiveColor: "#017b2c",
      local!grayColor: "#b2b4bd",
      local!backgroundColor: "#f2f3f7",
      local!tabs: {
        a!map(id: 1, icon: "home"),
        a!map(id: 2, icon: "lightbulb"),
        a!map(id: 3, icon: "database"),
        a!map(id: 4, icon: "warehouse"),
        a!map(id: 5, icon: "cog"),
    
      },
      local!selectedTag: 1,
      local!kpiData: {
        a!map(
          id: 1,
          name: "Investment Cost",
          value: 104.13,
          unit: "M",
          isUp: true()
        ),
        a!map(
          id: 2,
          name: "Cash balance",
          value: 523.25,
          unit: "K",
          isUp: false()
        ),
        a!map(
          id: 3,
          name: "RPI",
          value: 1.43,
          unit: "x",
          isUp: false()
        ),
        a!map(
          id: 4,
          name: "IRR",
          value: 405.34,
          unit: "K",
          isUp: true()
        ),
        a!map(
          id: 5,
          name: "TVPI",
          value: 1.32,
          unit: "x",
          isUp: false()
        ),
        a!map(
          id: 6,
          name: "DPI",
          value: 1.13,
          unit: "x",
          isUp: false()
        ),
        a!map(
          id: 7,
          name: "KPI",
          value: 1.56,
          unit: "x",
          isUp: false()
        )
      },
      local!kpiDataCount: length(local!kpiData),
      a!headerContentLayout(
        backgroundColor: local!backgroundColor,
        header: {
          a!cardLayout(
            shape: "ROUNDED",
            showBorder: false,
            padding: "NONE",
            contents: {
              a!columnsLayout(
                spacing: "NONE",
                columns: {
                  a!columnLayout(
                    width: "EXTRA_NARROW",
                    contents: {
                      a!stampField(
                        marginBelow: "EVEN_MORE",
                        size: "TINY",
                        align: "CENTER",
                        backgroundColor: local!selectionColor,
                        contentColor: "",
                        icon: "bell-o"
                      ),
                      a!forEach(
                        items: local!tabs,
                        expression: {
                          a!cardLayout(
                            shape: "ROUNDED",
                            decorativeBarPosition: "START",
                            decorativeBarColor: if(
                              index(fv!item, "id", null()) = local!selectedTag,
                              local!selectionColor,
                              "#fff"
                            ),
                            showBorder: false(),
                            marginBelow: "STANDARD",
                            padding: "LESS",
                            contents: {
                              a!richTextDisplayField(
                                align: "CENTER",
                                value: {
                                  a!richTextIcon(
                                    icon: index(fv!item, "icon", null()),
                                    size: "MEDIUM_PLUS",
                                    color: if(
                                      index(fv!item, "id", null()) = local!selectedTag,
                                      local!selectionColor,
                                      local!defaultColor
                                    )
                                  )
                                }
                              )
                            },
                            link: a!dynamicLink(
                              value: index(fv!item, "id", null()),
                              saveInto: { local!selectedTag }
                            )
                          )
                        }
                      )
                    }
                  ),
                  a!columnLayout(
                    width: "9X",
                    contents: {
                      a!cardLayout(
                        style: local!backgroundColor,
                        showBorder: false,
                        padding: "MORE",
                        contents: {
                          a!richTextDisplayField(
                            marginBelow: "EVEN_MORE",
                            value: {
                              a!richTextItem(
                                size: "LARGE",
                                style: "STRONG",
                                text: { "Maximilian Hoffman" }
                              ),
                              char(10),
                              a!richTextItem(
                                size: "SMALL",
                                color: local!grayColor,
                                text: { "UIDflex LTD" }
                              )
                            }
                          ),
                          a!columnsLayout(
                            marginAbove: "MORE",
                            columns: {
                              a!columnLayout(
                                width: "2X",
                                contents: {
                                  a!richTextDisplayField(
                                    marginAbove: "MORE",
                                    value: {
                                      a!richTextItem(
                                        size: "MEDIUM_PLUS",
                                        style: "STRONG",
                                        text: { "Main KPIs" }
                                      ),
                                      char(10),
                                      a!richTextItem(
                                        color: local!grayColor,
                                        size: "SMALL",
                                        text: { "As of 28 may 2023" }
                                      )
                                    }
                                  )
                                }
                              ),
                              a!columnLayout(
                                width: "8X",
                                contents: {
                                  a!forEach(
                                    items: enumerate(tointeger(local!kpiDataCount / 4)),
                                    expression: a!localVariables(
                                      local!counter: fv!item,
                                      local!currentRange: enumerate(4) + 1 + 4 * local!counter,
                                      a!columnsLayout(
                                        columns: a!forEach(
                                          items: local!currentRange,
                                          expression: if(
                                            fv!item > local!kpiDataCount,
                                            a!columnLayout(),
                                            a!columnLayout(
                                              contents: {
                                                a!localVariables(
                                                  local!currentKPIdata: index(local!kpiData, fv!item, null()),
                                                  a!cardLayout(
                                                    showBorder: false,
                                                    shape: "ROUNDED",
                                                    padding: "STANDARD",
                                                    contents: {
                                                      a!sideBySideLayout(
                                                        alignVertical: "MIDDLE",
                                                        items: {
                                                          a!sideBySideItem(
                                                            item: a!richTextDisplayField(
                                                              value: {
                                                                a!richTextItem(
                                                                  size: "SMALL",
                                                                  text: {
                                                                    index(local!currentKPIdata, "name", null())
                                                                  },
                                                                  color: local!grayColor
                                                                )
                                                              }
                                                            ),
                                                            width: "MINIMIZE"
                                                          ),
                                                          a!sideBySideItem(
                                                            item: a!richTextDisplayField(
                                                              align: "RIGHT",
                                                              value: {
                                                                a!richTextIcon(
                                                                  icon: { "chevron-circle-right" },
                                                                  color: local!grayColor
                                                                )
                                                              }
                                                            ),
    
                                                          )
                                                        }
                                                      ),
                                                      a!sideBySideLayout(
                                                        alignVertical: "MIDDLE",
                                                        items: {
                                                          a!sideBySideItem(
                                                            item: a!richTextDisplayField(
                                                              value: {
                                                                a!richTextIcon(
                                                                  color: if(
                                                                    index(local!currentKPIdata, "isUp", null()),
                                                                    local!positiveColor,
                                                                    "#fff"
                                                                  ),
                                                                  icon: { "caret-up" },
                                                                  size: "MEDIUM"
                                                                )
                                                              }
                                                            ),
                                                            width: "MINIMIZE"
                                                          ),
                                                          a!sideBySideItem(
                                                            item: a!richTextDisplayField(
                                                              value: {
                                                                a!richTextItem(
                                                                  color: if(
                                                                    index(local!currentKPIdata, "isUp", null()),
                                                                    local!positiveColor,
                                                                    ""
                                                                  ),
                                                                  size: "MEDIUM_PLUS",
                                                                  text: {
                                                                    index(local!currentKPIdata, "value", null()),
                                                                    index(local!currentKPIdata, "unit", null())
                                                                  }
                                                                )
                                                              }
                                                            ),
                                                            width: "MINIMIZE"
                                                          )
                                                        }
                                                      )
                                                    }
                                                  )
                                                ),
    
                                              }
                                            )
                                          )
                                        )
                                      )
                                    )
                                  ),
    
                                }
                              )
                            }
                          ),
                          a!columnsLayout(
                            marginAbove: "MORE",
                            columns: {
                              a!columnLayout(
                                width: "2X",
                                contents: {
                                  a!richTextDisplayField(
                                    marginBelow: "MORE",
                                    value: {
                                      a!richTextItem(
                                        size: "MEDIUM_PLUS",
                                        text: { "Investment Performance" }
                                      ),
                                      char(10),
                                      a!richTextItem(
                                        size: "SMALL",
                                        color: local!grayColor,
                                        text: { "Gross metrics" }
                                      )
                                    }
                                  ),
                                  a!sideBySideLayout(
                                    alignVertical: "MIDDLE",
                                    items: {
                                      a!sideBySideItem(
                                        item: a!richTextDisplayField(
                                          value: {
                                            a!richTextItem(
                                              size: "MEDIUM",
                                              color: local!positiveColor,
                                              text: { "View report" }
                                            )
                                          }
                                        ),
                                        width: "MINIMIZE"
                                      ),
                                      a!sideBySideItem(
                                        item: a!richTextDisplayField(
                                          value: {
                                            a!richTextIcon(
                                              color: local!positiveColor,
                                              icon: { "chevron-circle-right" }
                                            )
                                          }
                                        )
                                      )
                                    }
                                  )
                                }
                              ),
                              a!columnLayout(
                                width: "8X",
                                contents: {
                                  a!cardLayout(
                                    shape: "ROUNDED",
                                    showBorder: false,
                                    padding: "STANDARD",
                                    contents: {
                                      a!richTextDisplayField(
                                        value: {
                                          a!richTextItem(
                                            size: "MEDIUM",
                                            style: "STRONG",
                                            text: { "Total overview" }
                                          )
                                        },
                                        marginBelow: "MORE",
    
                                      ),
                                      a!columnChartField(
                                        label: "Defect Tickets",
                                        categories: {
                                          "Jan",
                                          "Feb",
                                          "Mar",
                                          "Apr",
                                          "May",
                                          "Jun",
                                          "Jul",
                                          "Aug",
                                          "Sep",
                                          "Oct",
                                          "Nov",
                                          "Dec"
                                        },
                                        series: {
                                          a!chartSeries(
                                            label: "Internal",
                                            data: { 3, 1, 2, 2, 2, 1, 0, 1, 0, 1, 0, 1 }
                                          ),
                                          a!chartSeries(
                                            label: "Customer",
                                            data: { 4, 3, 3, 2, 4, 2, 1, 2, 0, 0, 1, 2 }
                                          )
                                        },
                                        colorScheme: "MOSS",
                                        yAxisTitle: "Number of Tickets Logged",
                                        stacking: "NORMAL",
                                        showLegend: true,
                                        showDataLabels: true
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }
      )
    )`
  },
  
  {
    "imgPath": "/src/images/events_screen_01.png",
    "bgColor": "#f2f5f9",
    "code": `a!localVariables(
      local!eventData: {
        a!map(
          id: 1,
          date: today(),
          events: {
            a!map(
              id: 1,
              title: "Event 1",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            ),
            a!map(
              id: 2,
              title: "Event 2",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            ),
            a!map(
              id: 3,
              title: "Event 3",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            )
          }
        ),
        a!map(
          id: 2,
          date: today()+1,
          events: {
            a!map(
              id: 4,
              title: "Event 4",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            ),
            a!map(
              id: 5,
              title: "Event 5",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            )
          }
        ),
        a!map(
          id: 3,
          date: today()+2,
          events: {
            a!map(
              id: 6,
              title: "Event 6",
              startTime: "02:00 PM",
              endTime: "02:30 PM",
              assignee: loggedInUser(),
              description: "Notes: some sample description lorem ipsum some test description lorem ipsum"
            )
          }
        )
      },
      local!selectedId: 1,
      local!selectedData: index(
        index(
          local!eventData,
          wherecontains(
            tointeger(local!selectedId),
            tointeger(index(local!eventData,"id",null()))
          ),
          null()
        ),
        1,
        null()
      ),
      local!selectionColor: "#255ed6",
      local!grayColor: "#95949c",
      local!weekDays: {
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      },
      local!headingColor: "#413f4c",
      local!textColor: "#b9b7bc",
      local!bgColor: "#f2f5f9",
      a!cardLayout(
        style:  local!bgColor,
        contents: {
          a!columnsLayout(
            columns:{
              a!columnLayout(
                width: "7X",
                contents:{
    
                }
              ),
              a!columnLayout(
                width: "3X",
                contents:{
                  a!cardLayout(
                    shape: "ROUNDED",
                    showBorder: false,
                    padding: "STANDARD",
                    contents: {
                      a!richTextDisplayField(
                        value: {
                          a!richTextItem(
                            style: "STRONG",
                            size: "MEDIUM",
                            text: { "Event Reminders" }
                          ),
                        }
                      ),
                      a!columnsLayout(
                        marginBelow: "MORE",
                        columns: {
                          a!forEach(
                            items: local!eventData,
                            expression: a!columnLayout(
                              contents: {
                                a!cardLayout(
                                  shape: "ROUNDED",
                                  showBorder: false,
                                  showShadow: true,
                                  padding: "NONE",
                                  style: if(
                                    local!selectedId = index(fv!item,"id",null()),
                                    local!selectionColor,
                                    ""
                                  ),
                                  contents: {
                                    a!richTextDisplayField(
                                      align: "CENTER",
                                      marginAbove: "LESS",
                                      value: {
                                        a!richTextItem(
                                          size: "LARGE_PLUS",
                                          color: if(
                                            local!selectedId = index(fv!item,"id",null()),
                                            "",
                                            local!grayColor
                                          ),
                                          text: { day(index(fv!item, "date", {})) }
                                        )
                                      }
                                    ),
                                    a!horizontalLine(
                                      marginBelow: "NONE",
                                      color: if(
                                        local!selectedId = index(fv!item,"id",null()),
                                        "#fff",
                                        ""
                                      ),
                                    ),
                                    a!richTextDisplayField(
                                      align: "CENTER",
                                      marginAbove: "NONE",
                                      marginBelow: "LESS",
                                      value: {
                                        a!richTextItem(
                                          color: if(
                                            local!selectedId = index(fv!item,"id",null()),
                                            "",
                                            local!grayColor
                                          ),
                                          text: { index(local!weekDays, weekday(index(fv!item, "date", {})), null()) }
                                        )
                                      }
                                    )
                                  },
                                  link: a!dynamicLink(
                                    value: index(
                                      index(
                                        local!eventData,
                                        wherecontains(
                                          tointeger(index(fv!item,"id",null())),
                                          tointeger(index(local!eventData,"id",null()))
                                        ),
                                        null()
                                      ),
                                      1,
                                      null()
                                    ),
                                    saveInto: {
                                      local!selectedData,
                                      a!save(
                                        local!selectedId,
                                        tointeger(index(fv!item,"id",null())),
                                      )
                                    }
                                  )
                                )
                              }
                            )
                          )
                        }
                      ),
                      a!forEach(
                        items: index(local!selectedData,"events",null()),
                        expression: {
                          a!sideBySideLayout(
                            alignVertical: "MIDDLE",
                            items:{
                              a!sideBySideItem(            
                                item:
                                a!richTextDisplayField(
                                  value:{
                                    a!richTextIcon(
                                      color: local!headingColor,
                                      icon:{
                                        "circle"
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextItem(
                                      color: local!headingColor,
                                      style: "STRONG",
                                      size: "MEDIUM",
                                      text:{
                                        index(fv!item,"title",{})
                                      }
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  align: "RIGHT",
                                  value:{
                                    a!richTextItem(
                                      color: local!selectionColor,
                                      linkStyle: "STANDALONE",
                                      style: "STRONG",
                                      text:{
                                        "See More"
                                      }
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextIcon(
                                      color: local!selectionColor,
                                      icon:{
                                        "angle-right-bold"
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            }
                          ),
                          a!sideBySideLayout(
                            alignVertical: "MIDDLE",
                            items:{
                              a!sideBySideItem(            
                                item:
                                a!richTextDisplayField(
                                  value:{
                                    a!richTextIcon(
                                      color: "#fff",
                                      icon:{
                                        "circle"
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextItem(
                                      color: local!grayColor,
                                      text:{
                                        index(fv!item,"startTime",{}),
                                        " - ",
                                        index(fv!item,"endTime",{})  
                                      }
                                    )
                                  }
                                )
                              ),
                            }
                          ),
                          a!sideBySideLayout(
                            alignVertical: "MIDDLE",
                            items:{
                              a!sideBySideItem(            
                                item:
                                a!richTextDisplayField(
                                  value:{
                                    a!richTextIcon(
                                      color: "#fff",
                                      icon:{
                                        "circle"
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextItem(
                                      color: local!textColor,
                                      text:{
                                        "Assignee: "
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!imageField(
                                  style: "AVATAR",
                                  size: "ICON",
                                  images:{
                                    a!userImage(
                                      user:{
                                        index(fv!item,"assignee",{})
    
                                      }
                                    )
    
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextItem(
                                      color: local!textColor,
                                      text:{
                                        index(fv!item,"assignee",{})
    
                                      }
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            }
                          ),
                          a!sideBySideLayout(
                            alignVertical: "MIDDLE",
                            items:{
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextIcon(
                                      color: "#fff",
                                      icon:{
                                        "circle"
    
                                      }
                                    )
    
                                  }
                                ),
                                width: "MINIMIZE"
                              ),
                              a!sideBySideItem(            
                                item:a!richTextDisplayField(
                                  value:{
                                    a!richTextItem(
                                      text:{
                                        index(fv!item,"description",{})
                                      },
                                      color: local!textColor,
                                    )
                                  }
                                ),
                                width: "MINIMIZE"
                              )
                            }
                          ),
                          if(
                            fv!isLast,
                            {},
                            a!horizontalLine()
                          )
                        }
                      )
                    }
                  )
                }
              )  
            }
          ),
        }
      )
    )`
  },
  {
    "imgPath": "/src/images/Project-TaskReport.png",
    "bgColor": "#dfd8d2",
    "code": `a!localVariables( 
      local!tasks: {
        a!map(
          label: "Completed Task",
          value: 23
        ),
        a!map(
          label: "New Task",
          value: 10
        ),
        a!map(
          label: "Unfinished Task",
          value: 4
        ),
        a!map(
          label: "In Progress Task",
          value: 7
        )
      },
      local!data:{
        a!map(
          id:1,
          day:"sun",
          weekday:1,
          value:5,
        ),
        a!map(
          id:2,
          day:"mon",
          weekday:2,
          value:11,
        ),
        a!map(
          id:3,
          day:"tue",
          weekday:3,
          value:22,
        ),
        a!map(
          id:4,
          day:"wed",
          weekday:4,
          value:14,
        ),
        a!map(
          id:5,
          day:"thu",
          weekday:5,
          value:16,
        ),
        a!map(
          id:6,
          day:"fri",
          weekday:22,
          value:5,
        ),
        a!map(
          id:7,
          day:"sat",
          weekday:7,
          value:18,
        )
      },
      {
        a!cardLayout(
          style: "#dfd8d2",
          showBorder: false(),
          shape: "ROUNDED",
          contents: {
            a!columnsLayout(
              columns:{
                a!columnLayout(
                  width: "3X",
                  contents:{
                    a!cardLayout(
                      shape: "ROUNDED",
                      padding: "STANDARD",
                      showBorder: false,
                      marginBelow: "STANDARD",
                      contents:{
                        a!richTextDisplayField(
                          marginBelow: "STANDARD",
                          value:{
                            a!richTextItem(
                              size: "MEDIUM_PLUS",
                              text:{
                                "Tasks"
                              }
                            )
    
                          }
                        ),
                        a!forEach(
                          items: local!tasks,
                          expression: {
                            a!richTextDisplayField(
                              marginAbove: "STANDARD",
                              value:{
                                a!richTextItem(
                                  text:{
                                    index(fv!item,"label",{})
                                  },
                                  style: "STRONG"
                                )
    
                              }
                            ),  
                            a!cardLayout(
                              showBorder: false,
                              shape: "ROUNDED",
                              style: "#dfd8d2",
                              padding: "NONE",
                              contents:{
                                a!columnsLayout(
                                  columns:{
                                    a!columnLayout(
                                      width: concat(
                                        tointeger(index(fv!item,"value",null())*10/sum(index(local!tasks,"value",null()))),
                                        "X"
                                      ),
                                      contents:{
                                        a!cardLayout(
                                          showBorder: false,
                                          shape: "ROUNDED",
                                          style: "#b09f85",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                a!richTextItem(
                                                  style: "STRONG",
                                                  color: "#fff",
                                                  text:{
                                                    index(fv!item,"value",null()),
                                                    " Tasks"
                                                  }
                                                )
    
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    a!columnLayout()
                                  }
                                )
                              }
                            )  
                          }
                        ),
                      }
                    ),
                    a!cardLayout(
                      shape: "ROUNDED",
                      showBorder: false,
                      padding: "STANDARD",
                      marginBelow: "STANDARD",
                      contents:{
                        a!richTextDisplayField(
                          value:{
                            a!richTextItem(
                              size: "MEDIUM_PLUS",
                              text:{
                                "Statics"
                              }
                            )
                          },
                          marginBelow: "STANDARD",
                        ),
                        a!columnsLayout(
                          alignVertical: "BOTTOM",
                          columns:{  
                            a!forEach(
                              items: local!data,
                              expression: a!columnLayout(
                                width: "",
                                contents:{
                                  a!columnsLayout(
                                    columns:{
                                      a!columnLayout(
                                        width: "2X",
                                        contents:{
                                        }
                                      ),
                                      a!columnLayout(
                                        width: "NARROW",
                                        contents:{
                                          a!richTextDisplayField(
                                            align: "CENTER",
                                            value: a!richTextItem(
                                              text: index(fv!item,"value",null()),
                                              style: if(
                                                weekday(today()) = index(fv!item,"weekday",null()),
                                                "STRONG",
                                                ""
                                              )
                                            )
                                          ),
                                          a!cardLayout(
                                            shape: "ROUNDED",
                                            style: if(
                                              weekday(today()) < index(fv!item,"weekday",null()),
                                              "#dfd8d2",
                                              "#dfd"
                                            ),
                                            contents:{
                                              a!richTextDisplayField(
                                                value:{
                                                  a!richTextItem(
                                                    text: {  
                                                      a!forEach(
                                                        items: enumerate(tointeger(index(fv!item,"value",null())/2)),
                                                        expression: char(10)
                                                      )  
                                                    }
                                                  ),
                                                }
                                              )
    
                                            }
                                          ),
                                        }
                                      ),
                                      a!columnLayout(
                                        width: "2X",
                                        contents:{
                                        }
                                      )  
                                    }
                                  ),
                                  a!richTextDisplayField(
                                    align: "CENTER",
                                    value: a!richTextItem(
                                      text: index(fv!item,"day",null()),
                                      style: if(
                                        weekday(today()) = index(fv!item,"weekday",null()),
                                        "STRONG",
                                        ""
                                      )
                                    )
                                  )
                                }
                              ), 
                            )
                          }
                        )  
                      }
                    ),
                  }
                ),
                a!columnLayout(
                  width: "4X",
                  contents:{
                    a!cardLayout(
                      shape: "ROUNDED",
                      padding: "MORE",
                      showBorder: false,
                      contents: {
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(
                              contents: {
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "ORDER QUANTITTY ",
                                      size: "MEDIUM",
                                      style: "STRONG"
                                    ),
                                    a!richTextIcon(
                                      icon: "exclamation-circle",
                                      color: "#bbb",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                a!columnsLayout(
                                  columns: {
                                    a!columnLayout(
                                      contents: {
                                        a!richTextDisplayField(
                                          value: {
                                            a!richTextItem(
                                              text: "2.132",
                                              size: "LARGE",
                                              style: "STRONG"
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      width: "",
                                      contents: {
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          showBorder: false,
                                          style: rule!ATA_utils_getLightHexCode(
                                            hexCode: cons!ATA_HEX_COLOR_CODES[19],
                                            percent: 80
                                          ),
                                          contents: {
                                            a!richTextDisplayField(
                                              align: "CENTER",
                                              value: {
                                                a!richTextItem(
                                                  color: cons!ATA_HEX_COLOR_CODES[19],
                                                  text: {
                                                    a!richTextIcon(
                                                      icon: "level-up",
                                                    ),
                                                    " +1.2%"
                                                  },
                                                  style: "STRONG",
                                                  size: "MEDIUM"
                                                )
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                  }
                                ),
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "Increase than last month ",
                                      size: "",
                                      style: "",
                                      color: "#bbb"
                                    ),
                                  }
                                ),
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!areaChartField(
                                  height: "SHORT",
                                  label: "Cases by Month",
                                  labelPosition: "ABOVE",
                                  categories: {"Mar", "Apr", "May", "Jun", "Jul"},
                                  series: {
                                    a!chartSeries(label: "Met SLA", data: {72, 91, 125, 195, 92,}),
                                    a!chartSeries(label: "Missed SLA", data: {67, 120, 90, 191, 90})
                                  },
                                  stacking: "NORMAL",
                                  colorScheme: a!colorSchemeCustom(
                                    colors: {"#b8e2ff","#2496e2",}
                                  ),
                                )
                              }
                            ),
                          }
                        ),
                      }
                    ),
                    a!cardLayout(
                      marginAbove: "STANDARD",
                      shape: "ROUNDED",
                      padding: "MORE",
                      showBorder: false,
                      contents: {
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(
                              contents: {
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "AVG. ORDER VALUE ",
                                      size: "MEDIUM",
                                      style: "STRONG"
                                    ),
                                    a!richTextIcon(
                                      icon: "exclamation-circle",
                                      color: "#bbb",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                a!columnsLayout(
                                  columns: {
                                    a!columnLayout(
                                      contents: {
                                        a!richTextDisplayField(
                                          value: {
                                            a!richTextIcon(
                                              icon: "USD",
                                            ),
                                            a!richTextItem(
                                              text: "92.08",
                                              size: "LARGE",
                                              style: "STRONG"
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      width: "",
                                      contents: {
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          showBorder: false,
                                          style: rule!ATA_utils_getLightHexCode(
                                            hexCode: cons!ATA_HEX_COLOR_CODES[18],
                                            percent: 80
                                          ),
                                          contents: {
                                            a!richTextDisplayField(
                                              align: "CENTER",
                                              value: {
                                                a!richTextItem(
                                                  color: cons!ATA_HEX_COLOR_CODES[18],
                                                  text: {
                                                    a!richTextIcon(
                                                      icon: "level-down",
                                                    ),
                                                    " -0.2%"
                                                  },
                                                  style: "STRONG",
                                                  size: "MEDIUM"
                                                )
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                  }
                                ),
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "Decrease than last month ",
                                      size: "",
                                      style: "",
                                      color: "#bbb"
                                    ),
                                  }
                                ),
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!columnChartField(
                                  height: "SHORT",
                                  label: "2012 Tempo Usage Trends",
                                  categories: {"Qt 1", "Qt 2", "Qt 3", "Qt 4"},
                                  series: {
                                    a!chartSeries(label: "IT", data: {92, 94, 93, 95}),
                                    a!chartSeries(label: "Human Services", data: {84, 83, 85, 86}),
                                    a!chartSeries(label: "Sales", data: {70, 63, 90, 72}),
                                    a!chartSeries(label: "Marketing", data: {90, 70, 90, 90})
                                  },
                                  colorScheme: "SUNSET",
                                  xAxisTitle: "Quarter",
                                  yAxisTitle: "% Active",
                                  showLegend: true
                                )
                              }
                            ),
                          }
                        ),
                      }
                    ),
                    a!cardLayout(
                      marginAbove: "STANDARD",
                      shape: "ROUNDED",
                      marginBelow: "STANDARD",
                      padding: "MORE",
                      showBorder: false,
                      contents: {
                        a!columnsLayout(
                          columns: {
                            a!columnLayout(
                              contents: {
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "IMPRESSION ",
                                      size: "MEDIUM",
                                      style: "STRONG"
                                    ),
                                    a!richTextIcon(
                                      icon: "exclamation-circle",
                                      color: "#bbb",
                                      size: "MEDIUM"
                                    )
                                  }
                                ),
                                a!columnsLayout(
                                  columns: {
                                    a!columnLayout(
                                      contents: {
                                        a!richTextDisplayField(
                                          value: {
                                            a!richTextItem(
                                              text: "12.3K",
                                              size: "LARGE",
                                              style: "STRONG"
                                            )
                                          }
                                        )
                                      }
                                    ),
                                    a!columnLayout(
                                      width: "",
                                      contents: {
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          showBorder: false,
                                          style: rule!ATA_utils_getLightHexCode(
                                            hexCode: cons!ATA_HEX_COLOR_CODES[19],
                                            percent: 80
                                          ),
                                          contents: {
                                            a!richTextDisplayField(
                                              align: "CENTER",
                                              value: {
                                                a!richTextItem(
                                                  color: cons!ATA_HEX_COLOR_CODES[19],
                                                  text: {
                                                    a!richTextIcon(
                                                      icon: "level-up",
                                                    ),
                                                    " +4.2%"
                                                  },
                                                  style: "STRONG",
                                                  size: "MEDIUM"
                                                )
                                              }
                                            )
                                          }
                                        )
                                      }
                                    ),
                                  }
                                ),
                                a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: "Increase than last month ",
                                      size: "",
                                      style: "",
                                      color: "#bbb"
                                    ),
                                  }
                                ),
                              }
                            ),
                            a!columnLayout(
                              contents: {
                                a!areaChartField(
                                  height: "SHORT",
                                  label: "Cases by Month",
                                  labelPosition: "ABOVE",
                                  categories: {"Mar", "Apr", "May", "Jun", "Jul"},
                                  series: {
                                    a!chartSeries(label: "Met SLA", data: {72, 191, 125, 195, 92,}),
                                    a!chartSeries(label: "Missed SLA", data: {67, 190, 90, 191, 90})
                                  },
                                  stacking: "NORMAL",
                                  colorScheme: a!colorSchemeCustom(
                                    colors: {"#b5b5e2","#7878cf"}
                                  ),
                                )
                              }
                            ),
                          }
                        ),
                      },
                    ),
                  }
                ),
              }
            ),
          }
        ),
      }
    )`
  },
  {
    "imgPath": "/src/images/noteSection.png",
    "bgColor": "#f8f9fc",
    "code": `a!localVariables(
      local!notes: {
        a!map(
          id: 1,
          assetName: "Security Camera",
          assetId: "SC7890",
          color: "#326afd",
          Location: "Main Entrance",
          lastChecked: "May 27, 2023",
          Note: "The Security Camera with ID SC7890 is positioned at the Main Entrance. The last check conducted on May 27, 2023, revealed that the camera lens needs cleaning. It is crucial to maintain clear and unobstructed visuals for effective surveillance."
        ),
        a!map(
          id: 2,
          assetName: "Laptop",
          assetId: "LT1234",
          color: "#ffd947",
          Location: "IT Department",
          lastChecked: "May 25, 2023",
          Note: "The Laptop with ID LT1234 is currently stored in the IT Department. The last check conducted on May 25, 2023, indicated that the laptop is in good working condition. However, it is recommended to periodically perform maintenance and updates to ensure optimal performance and security."
        ),
    
        a!map(
          id: 3,
          assetName: "Projector",
          assetId: "PR5678",
          color: "#805cfe",
          Location: "Conference Room A",
          lastChecked: "May 26, 2023",
          Note: "The Projector with ID PR5678 is located in Conference Room A. During the last check on May 26, 2023, it was noted that the projector's bulb needs replacement. It is advised to schedule the replacement promptly to avoid disruptions during presentations."
        ),
    
        a!map(
          id: 4,
          assetName: "Printer",
          assetId: "PT9012",
          Location: "Office 204",
          color: "#0e121a",
          lastChecked: "May 27, 2023",
          Note: "The Printer with ID PT9012 is currently located in Office 204. The last check performed on May 27, 2023, revealed that the printer is currently out of paper. Please refill the paper tray to ensure uninterrupted printing functionality."
        ),
    
        a!map(
          id: 5,
          assetName: "Company Car",
          assetId: "CC3456",
          Location: "Parking Lot",
          lastChecked: "May 25, 2023",
          color: "#fe7746",
          Note: "The Company Car with ID CC3456 is parked in the designated Parking Lot. During the last check on May 25, 2023, it was recommended to schedule an oil change to maintain the car's performance and reliability."
        ),
    
        a!map(
          id: 6,
          assetName: "Mobile Phone",
          assetId: "MP7890",
          Location: "Employee Desk 102",
          color: "#ae3b76",
          lastChecked: "May 26, 2023",
          Note: "The Mobile Phone with ID MP7890 is assigned to Employee Desk 102. The last check conducted on May 26, 2023, revealed that the phone's battery is low. It is advisable to charge the phone to ensure uninterrupted communication and productivity."
        ),
    
        a!map(
          id: 7,
          assetName: "Network Switch",
          assetId: "NS1234",
          Location: "Server Room",
          color: "#805cfe",
          lastChecked: "May 27, 2023",
          Note: "The Network Switch with ID NS1234 is installed in the Server Room. During the last check on May 27, 2023, it was discovered that Switch port 5 is not functioning. Immediate attention is required to resolve the issue and restore network connectivity."
        ),
    
        a!map(
          id: 8,
          assetName: "Desk Chair",
          assetId: "DC5678",
          Location: "Office 301",
          lastChecked: "May 25, 2023",
          color: "#fe7746",
          Note: "The Desk Chair with ID DC5678 is currently placed in Office 301. The last check conducted on May 25, 2023, identified that the chair's armrest is broken. Please arrange for repair or replacement to ensure ergonomic comfort for employees."
        ),
    
        a!map(
          id: 9,
          assetName: "External Hard Drive",
          assetId: "EH9012",
          Location: "Storage Room",
          lastChecked: "May 26, 2023",
          color: "#ae3b76",
          Note: "The External Hard Drive with ID EH9012 is currently stored in the Storage Room. The last check on May 26, 2023, revealed that the hard drive's capacity is almost full. It is recommended to monitor the usage closely and consider transferring or archiving data to free up space, ensuring the continued functionality and availability of the External Hard Drive for future use."
        ),
    
        a!map(
          id: 10,
          assetName: "Whiteboard",
          assetId: "WB3456",
          Location: "Training Room B",
          lastChecked: "May 28, 2023",
          color: "#0ae9ae",
          Note: "The Whiteboard with ID WB3456 is located in Training Room B. During the most recent check on May 28, 2023, it was observed that the whiteboard surface requires cleaning. Please ensure it is regularly maintained for optimal visibility and usability."
        ),
    
        a!map(
          id: 11,
          assetName: "Security Camera",
          assetId: "SC7891",
          Location: "Main Lobby",
          lastChecked: "May 29, 2023",
          color: "#805cfe",
          Note: "The Security Camera with ID SC7891 is positioned in the Main Lobby. The last check conducted on May 29, 2023, indicated that the camera's angle needs adjustment for better coverage. Please realign the camera to ensure comprehensive monitoring of the area."
        )
      },
      {
        a!cardLayout(
          padding: "STANDARD",
          showBorder: false(),
          style: "#f2f5f9",
          contents: {
            a!columnsLayout(
              columns: {
                
                a!columnLayout(
                  width: "7X",
                  contents: {
                    a!cardLayout(
                      padding: "STANDARD",
                      shape: "ROUNDED",
                      showBorder: false(),
                      contents: {
                        a!columnsLayout(
                          columns: a!forEach(
                            items: enumerate(3)+1,
                            expression: a!columnLayout(
                              contents: {
                                a!localVariables(
                                  local!items: tointeger(length(local!notes)/3),
                                  local!indexes: enumerate(local!items)+1+(fv!item-1)*local!items,
                                  a!forEach(
                                    items: local!indexes,
                                    expression: a!localVariables(
                                      local!note: index(local!notes,fv!item,null()),
                                      local!hexCode: if(
                                        a!isNullOrEmpty(index(local!note,"color",null())),
                                        "#bbbbbb",
                                        replace(index(local!note,"color",null()),1,1,"")
                                      ),
                                      local!percent: 92,
                                      local!percent2: 83,
    
                                      local!r: hex2dec(mid(local!hexCode,1,2)),
                                      local!g: hex2dec(mid(local!hexCode,3,2)),
                                      local!b: hex2dec(mid(local!hexCode,5,2)),
    
                                      local!newR: tointeger(local!r+((255-local!r)*local!percent/100)),
                                      local!newG: tointeger(local!g+((255-local!g)*local!percent/100)),
                                      local!newB: tointeger(local!b+((255-local!b)*local!percent/100)),
                                      
                                      local!newR2: tointeger(local!r+((255-local!r)*local!percent2/100)),
                                      local!newG2: tointeger(local!g+((255-local!g)*local!percent2/100)),
                                      local!newB2: tointeger(local!b+((255-local!b)*local!percent2/100)),
    
    
                                      local!lightHex: concat("#",dec2hex(local!newR),dec2hex(local!newG),dec2hex(local!newB),"bbbbbb"),
                                      local!lightHex2: concat("#",dec2hex(local!newR2),dec2hex(local!newG2),dec2hex(local!newB2),"bbbbbb"),
                                      local!bgColor: left(local!lightHex,7),
                                      local!bgColor2: left(local!lightHex2,7),
                                      if(
                                        a!isNullOrEmpty(local!note),
                                        {},
                                        a!cardLayout(
                                          showShadow: true(),
                                          showBorder: false(),
                                          shape: "ROUNDED",
                                          marginBelow: "MORE",
                                          padding: "STANDARD",
                                          style: local!bgColor,
                                          contents: {
                                            a!richTextDisplayField(
                                              value: {
                                                a!richTextItem(
                                                  text:  {
                                                    index(local!note,"assetName",null()),
                                                    " | ",
                                                  },
                                                  size: "MEDIUM",
                                                  style: "",
                                                ),
                                                a!richTextItem(
                                                  text: index(local!note,"assetId",null()),
                                                  size: "MEDIUM",
                                                  style: "STRONG"
                                                ),
                                                char(10),
                                                a!richTextItem(
                                                  text: index(local!note,"lastChecked",null()),
                                                  size: "",
                                                  color: "#bbb"
                                                ),
                                              }
                                            ),
                                            a!richTextDisplayField(
                                              align: "RIGHT",
                                              value: {
                                                a!richTextIcon(
                                                  icon: "map-marker",
                                                  size: "MEDIUM",
                                                  color: index(local!note,"color",null()),
                                                ),
                                                a!richTextItem(
                                                  size: "MEDIUM",
                                                  text: {
                                                    "  ",
                                                    index(local!note,"Location",null())
                                                  },
                                                )
                                              }
                                            ),
                                            a!cardLayout(
                                              style: local!bgColor2,
                                              showBorder: false(),
                                              shape: "ROUNDED",
                                              padding: "STANDARD",
                                              contents: {
                                                a!cardLayout(
                                                  style: "TRANSPARENT",
                                                  padding: "STANDARD",
                                                  decorativeBarColor: index(local!note,"color",null()),
                                                  decorativeBarPosition: "START",
                                                  shape: "ROUNDED",
                                                  showBorder: false(),
                                                  contents: {
                                                    a!richTextDisplayField(
                                                      value: a!richTextItem(
                                                        text: index(local!note,"Note",null())
                                                      )
                                                    )
                                                  }
                                                )
                                              }
                                            ),
                                          }
                                        )
                                      )
                                    )
                                  )
                                )
                              }
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        )
      }
    )`
  },
  {
    "imgPath": "/src/images/project-TaskDashboard.png",
    "bgColor": "#dfd8d2",
    "code": `a!localVariables(
      local!chatData:{
        a!map(
          sentBy: loggedInUser(),
          message: "Hi, how are you?"
        ),
        a!map(
          sentBy: "abcUser",
          message: "I'm good, thanks! How about you?"
        ),
        a!map(
          sentBy: "abcUser",
          message: "I'm doing well too, thanks for asking."
        ),
        a!map(
          sentBy: loggedInUser(),
          message: "That's great to hear. Anything exciting happening?"
        ),
      },
      local!meetData: {
        a!map(
          time: "9:20",
          heading: "Daily Project Review",
          description:"Team Organization",
          users: {"karanl@appcino.com","tuhsars@appcino.com",loggedInUser()},
          isPrivacy: true()
        ),
        a!map(
          time: "11:00",
          heading: "Sprint Surge",
          description:"Daily Boost for Agile Progress",
          users: {loggedInUser()},
          isPrivacy: false()
        )
      },
      local!chatHeading: "Team Chat",
      local!newMessage,
      {
        a!cardLayout(
          style: "#dfd8d2",
          showBorder: false(),
          shape: "ROUNDED",
          contents: {
            a!columnsLayout(
              columns:{
                a!columnLayout(),
                a!columnLayout(),
                a!columnLayout(
                  width: "",
                  contents:{
                    a!cardLayout(
                      shape: "ROUNDED",
                      padding: "MORE",
                      marginAbove: "",
                      marginBelow: "STANDARD",
                      showBorder: false(),
                      contents: {
                        a!sideBySideLayout(
                          marginBelow: "MORE",
                          alignVertical: "MIDDLE",
                          items: {
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                value: a!richTextItem(
                                  text: upper("Today's Meetings"),
                                  style: "STRONG",
                                  size: "MEDIUM"
                                )
                              ),
                              width: "MINIMIZE"
                            ),
                            a!sideBySideItem(
                              width: "MINIMIZE",
                              item: a!tagField(
                                tags: {
                                  a!tagItem(
                                    text: length({local!meetData}),
                                    backgroundColor: "#2f69fd"
                                  ),
                                }
                              )
                            ),
                            a!sideBySideItem(
                              item: a!richTextDisplayField(
                                align: "RIGHT",
                                value: a!richTextItem(
                                  text: "+ Add new meet",
                                  style: "",
                                  color: "ACCENT",
                                  size: ""
                                )
                              ),
                            ),
                          }
                        ),
                        a!forEach(
                          items: local!meetData,
                          expression: {
                            a!columnsLayout(
                              columns: {
                                a!columnLayout(
                                  width: "1X",
                                  contents: {
                                    a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          text: index(fv!item,"time",null()),
                                          style: "STRONG",
                                          size: "MEDIUM_PLUS"
                                        )
                                      }
                                    ),
                                  }
                                ),
                                a!columnLayout(
                                  width: "3X",
                                  contents: {
                                    a!richTextDisplayField(
                                      value: {
                                        a!richTextItem(
                                          text: index(fv!item,"heading",null()),
                                          style: "STRONG",
                                          size: ""
                                        ),
                                        char(10),
                                        a!richTextItem(
                                          text: index(fv!item,"description",null()),
                                          style: "",
                                          size: "",
                                          color: "#bbb"
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  contents: {
                                    a!sideBySideLayout(
                                      spacing: "NONE",
                                      items: {
                                        a!forEach(
                                          items: index(fv!item,"users",null()),
                                          expression: a!sideBySideItem(
                                            width: "MINIMIZE",
                                            item: a!imageField(
                                              size: "TINY",
                                              style: "AVATAR",
                                              images:  a!userImage(
                                                user: touser(fv!item)
                                              )
                                            )
                                          )
                                        ),
                                        a!sideBySideItem(
                                          width: "5X",
                                          item: a!richTextDisplayField(
                                            value: {
                                              a!richTextItem()
                                            }
                                          )
                                        )
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  contents: {
                                    a!sideBySideLayout(
                                      alignVertical: "MIDDLE",
                                      items: {
                                        a!sideBySideItem(
                                          item: a!richTextDisplayField(
                                            align: "RIGHT",
                                            value: {
                                              a!richTextItem(
                                                text: "Privacy",
                                                style: "STRONG"
                                              )
                                            }
                                          )
                                        ),
                                        a!sideBySideItem(
                                          width: "MINIMIZE",
                                          item: a!richTextDisplayField(
                                            align: "RIGHT",
                                            value: {
                                              a!richTextIcon(
                                                icon: if(
                                                  toboolean(index(fv!item,"isPrivacy",null())),
                                                  "toggle-on",
                                                  "toggle-off",
                                                ),
                                                size: "LARGE",
                                                color:  if(
                                                  toboolean(index(fv!item,"isPrivacy",null())),
                                                  "ACCENT",
                                                  "#bbb",
                                                ),
                                              )
                                            }
                                          )
                                        )
                                      }
                                    )
                                  }
                                ),
                              }
                            ),
                            a!sectionLayout(
                              divider: "BELOW",
                              showWhen: not(fv!isLast)
                            )
                          }
                        ),
                      }
                    ),
                    a!cardLayout(
                      shape: "ROUNDED",
                      showBorder: false,
                      style: "#000",
                      contents:{
                        a!cardLayout(
                          showBorder: false,
                          style: "#000",
                          contents:{
                            a!richTextDisplayField(
                              marginBelow: "STANDARD",
                              value:{
                                a!richTextItem(
                                  size: "MEDIUM_PLUS",
                                  text:{
                                    local!chatHeading
                                  }
                                )
                              }
                            ),
                          }
                        ),
                        a!forEach(
                          items: local!chatData,
                          expression:  a!columnsLayout(
                            alignVertical: "MIDDLE",
                            columns:{
                              a!columnLayout(
                                width: "EXTRA_NARROW",
                                contents:{
                                  a!imageField(
                                    showWhen: if(
                                      loggedInUser() = index(fv!item,"sentBy",{}),
                                      true(),
                                      false()
                                    ),
                                    align: "END",
                                    style: "AVATAR",
                                    size: "ICON_PLUS",
                                    images:{
                                      a!userImage(
                                        user:{
                                          index(fv!item,"sentBy",{})
    
                                        }
                                      )
    
                                    }
                                  )
    
                                }
                              ),
                              a!columnLayout(
                                width: "3X",
                                contents:{
                                  a!cardLayout(
                                    style: "#161616",
                                    shape: "ROUNDED",
                                    showBorder: false,
                                    contents:{
                                      a!richTextDisplayField(
                                        align:if(
                                          loggedInUser() = index(fv!item,"sentBy",{}),
                                          "LEFT",
                                          "RIGHT",
                                        ),
                                        value:{
                                          a!richTextItem(
                                            size: "MEDIUM",
                                            text:{
                                              index(fv!item,"message",{})
                                            }
                                          )
                                        }
                                      )
                                    }
                                  )
    
                                }
                              ),
                              a!columnLayout(
                                width: "EXTRA_NARROW",
                                contents:{
                                  a!imageField(
                                    showWhen: if(
                                      loggedInUser() = index(fv!item,"sentBy",{}),
                                      false(),
                                      true()
                                    ),
                                    style: "AVATAR",
                                    size: "ICON_PLUS",
                                    images:{
                                      a!userImage(
                                        user:{
                                          index(fv!item,"sentBy",{})
    
                                        }
                                      )
    
                                    }
                                  )
    
                                }
                              )  
    
                            }
                          )
                        ),
                        a!cardLayout(
                          showBorder: false,
                          shape: "ROUNDED",
                          style: "#161616",
                          contents:{
                            a!columnsLayout(
                              alignVertical: "MIDDLE",
                              columns:{
                                a!columnLayout(
                                  width: "2X",
                                  contents:{
                                    a!paragraphField(
                                      placeholder: "Type a message...",
                                      value: local!newMessage,
                                      saveInto: {
                                        local!newMessage
                                      }
                                    )
                                  }
                                ),
                                a!columnLayout(
                                  width: "EXTRA_NARROW",
                                  contents:{
                                    a!richTextDisplayField(
                                      align: "RIGHT",
                                      value:{
                                        a!richTextIcon(
                                          size: "MEDIUM_PLUS",
                                          icon:{
                                            "paper-plane"
                                          },
                                          color: if(
                                            a!isNullOrEmpty(local!newMessage),
                                            "#bbb",
                                            ""
                                          ),
                                          linkStyle: "STANDALONE",
                                          link: a!dynamicLink(
                                            showWhen: if(
                                              a!isNullOrEmpty(local!newMessage),
                                              false(),
                                              true()
                                            ),
                                            value:a!map(
                                              message: local!newMessage,
                                              sentBy: loggedInUser()
                                            ), 
                                            saveInto: {
                                              a!save(
                                                local!chatData,
                                                append(
                                                  local!chatData,
                                                  save!value   
                                                )
                                              ),
                                              a!save(
                                                local!newMessage,
                                                null()
                                              )
                                            }
                                          )
                                        )
    
                                      }
                                    )
    
                                  }
                                )  
    
                              }
                            )
    
                          }
                        )  
                      }
                    )
                  }
                ),
              }
            ),
          }
        ),
      }
    )`
  },
  {
    "imgPath": "/src/images/project-timeline.png",
    "bgColor": "#f7f7f7",
    "code": `a!localVariables(
      local!weekData: {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"},
      local!currentDay: weekday(today()),
      local!projectTimeline: {
        a!map(
          id:1,
          projectName: "CRM Project",
          percentageProgress: 13.2,
          timeLineData: {
            a!map(
              id:1,
              phase: "Planning",
              startDay: 2,
              endDay: 5,
              color: "#ddefc1"
            ),
            a!map(
              id:2,
              phase: "Admin Dashboard",
              startDay: 3,
              endDay: 6,
              color: "#f9f2d5"
            ),
            a!map(
              id:3,
              phase: "Write Survey",
              startDay: 0,
              endDay: 3,
              color: "#f0d0d1"
            ),
          }
        ),
        a!map(
          id:2,
          projectName: "NFT Market Place",
          percentageProgress: 45.8,
          timeLineData: {
            a!map(
              id:4,
              phase: "Web Design",
              startDay: 1,
              endDay: 3,
              color: "#ddefc1"
            ),
            a!map(
              id:5,
              phase: "Portal Configuration",
              startDay: 1,
              endDay: 6,
              color: "#f9f2d5"
            ),
            a!map(
              id:6,
              phase: "WEB APIs",
              startDay: 2,
              endDay: 5,
              color: "#f0d0d1"
            ),
          }
        ),
        a!map(
          id:3,
          projectName: "Financial App",
          percentageProgress: 37,
          timeLineData: {
            a!map(
              id:7,
              phase: "Planning",
              startDay: 1,
              endDay: 4,
              color: "#ddefc1"
            ),
            a!map(
              id:8,
              phase: "Agent Dashboard",
              startDay: 0,
              endDay: 4,
              color: "#f9f2d5"
            ),
            a!map(
              id:9,
              phase: "Client Survey",
              startDay: 0,
              endDay: 3,
              color: "#f0d0d1"
            ),
          }
        )
      },
      local!timeSheetData: {
        a!map(
          day:0,
          time: 48
        ),
        a!map(
          day:1,
          time: 39
        ),
        a!map(
          day:2,
          time: 52
        ),
        a!map(
          day:3,
          time: 60
        ),
        a!map(
          day:4,
          time: 33
        ),
        a!map(
          day:5,
          time: 26
        ),
        a!map(
          day:6,
          time: 30
        ),
      },
      {
        a!cardLayout(
          shape: "ROUNDED",
          style: "#f7f7f7",
          showBorder: false,
          contents:{
            a!columnsLayout(
              columns: {
                a!columnLayout(
                  width: "5X", 
                  contents: {
                    a!cardLayout(
                      shape: "ROUNDED",
                      showBorder: false,
                      contents: {
                        a!columnsLayout(
                          alignVertical: "BOTTOM",
                          columns: a!forEach(
                            items: local!timeSheetData,
                            expression: a!localVariables(
                              local!height: tointeger(index(fv!item,"time",null())*10/sum(index(local!timeSheetData,"time",null())))+1,
                              local!weekDay: index(fv!item,"day",null()),
                              local!day: index(local!weekData,local!weekDay+1,null()),
                              a!columnLayout(
                                width: "1X",
                                contents:{
                                  a!tagField(
                                    marginBelow: "NONE",
                                    align: "CENTER",
                                    tags:{
                                      a!tagItem(
                                        backgroundColor: "#000",
                                        text:{
                                          index(fv!item,"time",{}) & "h"
    
                                        }
                                      )
    
                                    }
                                  ),
                                  a!richTextDisplayField(
                                    marginAbove: "NONE",
                                    align: "CENTER",
                                    value: a!forEach(
                                      items: enumerate(local!height),
                                      expression: {
                                        a!richTextIcon(
                                          color: "#f5f4f0",
                                          size: "LARGE_PLUS",
                                          icon:{
                                            "square"
    
                                          }
                                        ),
                                        char(10)  
                                      }
                                    )
                                  ), 
                                  a!richTextDisplayField(
                                    align: "CENTER",
                                    value: {
                                      a!richTextItem(
                                        color: if(
                                          local!currentDay = fv!index,
                                          "",
                                          "#bbb",
                                        ),
                                        style: if(
                                          local!currentDay = fv!index,
                                          "STRONG",
                                          "",
                                        ),
                                        text: { local!day }
                                      )
                                    }
                                  )
                                }
                              )
                            )
                          ),
                        ),
                      }
                    ),
                  }
                ),
                a!columnLayout(
                  width: "5X",
                  contents: {
                    a!cardLayout(
                      shape: "ROUNDED",
                      showBorder: false,
                      contents: {
                        a!richTextDisplayField(
                          value: {
                            a!richTextItem(
                              size: "MEDIUM",
                              style: "STRONG",
                              text: { "Project Timeline" }
                            )
                          }
                        ),
                        a!columnsLayout(
                          spacing: "NONE",
                          columns: {
                            a!columnLayout(width: "3X", contents: {}),
                            a!forEach(
                              items: local!weekData,
                              expression: a!columnLayout(
                                width: "1X",
                                contents: {
                                  a!richTextDisplayField(
                                    align: "RIGHT",
                                    value: {
                                      a!richTextItem(
                                        color: if(
                                          local!currentDay = fv!index,
                                          "",
                                          "#bbb",
                                        ),
                                        style: if(
                                          local!currentDay = fv!index,
                                          "STRONG",
                                          "",
                                        ),
                                        text: { fv!item }
                                      )
                                    }
                                  )
                                }
                              ),
                            )
                          }
                        ),
                        a!forEach(
                          items: local!projectTimeline,
                          expression: {
                            a!columnsLayout(
                              alignVertical: "MIDDLE",
                              spacing: "NONE",
                              columns:{
                                a!columnLayout(
                                  width: "3X",
                                  contents:{
                                    a!cardLayout(
                                      shape: "ROUNDED",
                                      showBorder: false,
                                      padding: "EVEN_MORE",
                                      style: "#f7f7f7",
                                      contents:{
                                        a!richTextDisplayField(
                                          align: "CENTER",
                                          value:{
                                            a!richTextItem(
                                              style: "STRONG",
                                              text:{
                                                index(fv!item,"projectName",null())
                                              }
                                            ),
                                            char(10),
                                            a!richTextItem(
                                              color: "#bbb",
                                              text:{
                                                index(fv!item,"percentageProgress",null()),
                                                "%"
    
                                              }
                                            )
    
                                          }
                                        )
    
                                      }
                                    )
    
                                  }
                                ),
                                a!columnLayout(
                                  width: "7X",
                                  contents:{
                                    a!forEach(
                                      items: index(fv!item,"timeLineData",null()),
                                      expression: a!localVariables(
                                        local!name: index(fv!item,"phase",null()),
                                        local!startDay: index(fv!item,"startDay",null()),
                                        local!endDay: index(fv!item,"endDay",null()),
                                        local!firstColumnWidth: local!startDay,
                                        local!currentColumnWidth: local!endDay-local!startDay+1,
                                        local!secondColumnWidth: 7-local!firstColumnWidth-local!currentColumnWidth,
                                        a!columnsLayout(
                                          columns:{
                                            if(
                                              local!firstColumnWidth = 0,
                                              {},
                                              a!columnLayout(
                                                width: local!firstColumnWidth&"X",
                                                contents:{
    
                                                }
                                              ),
                                            ),
                                            a!columnLayout(
                                              width: local!currentColumnWidth&"X",
                                              contents:{
                                                a!cardLayout(
                                                  padding: "NONE",
                                                  showBorder: false,
                                                  shape: "ROUNDED",
                                                  contents:{
                                                    a!columnsLayout(
                                                      spacing: "NONE",
                                                      columns:{
                                                        a!columnLayout(
                                                          width: "EXTRA_NARROW",
                                                          contents:{
    
                                                          }
                                                        ),
                                                        a!columnLayout(
                                                          width: "10X",
                                                          contents:{
                                                            a!cardLayout(
                                                              tooltip: concat(
                                                                index(local!weekData,local!startDay+1,null()),
                                                                " - ",
                                                                index(local!weekData,local!endDay+1,null())
                                                              ),
                                                              showBorder: false,
                                                              padding: "EVEN_LESS",
                                                              shape: "ROUNDED",
                                                              style: index(fv!item,"color",null()),
                                                              contents:{
                                                                a!richTextDisplayField(
                                                                  align: "CENTER",
                                                                  value:{
                                                                    a!richTextItem(
                                                                      style: "STRONG",
                                                                      text:{
                                                                        local!name
                                                                      }
                                                                    )
                                                                  }
                                                                )
                                                              }
                                                            )
                                                          }
                                                        )  
                                                      }
                                                    )
                                                  }
                                                )
                                              }
                                            ),
                                            if(
                                              local!secondColumnWidth=0,
                                              {},
                                              a!columnLayout(
                                                width: local!secondColumnWidth&"X",
                                                contents:{
    
                                                }
                                              )
                                            )
    
                                          }
                                        ),
                                      )
                                    ),
                                  }
                                ),
                              }
                            )
                          }
                        ),
                      }
                    )
                  }
                )
              }
            ),
            a!richTextDisplayField(
              marginBelow: "MORE",
            )
          }
        ),
      }
    )`
  },
  {
    "imgPath": "/src/images/kpi_cards_01.png",
    "bgColor": "#000",
    "code": `a!localVariables(
      local!bgColor: "#000000",
      local!kpiData: {
        a!map(
          id: 1,
          value: 2385.76,
          label: "Income",
          tagIcon: "line-chart",
          unit: "K",
          icon: "usd",
          startDate: today() - 30,
          endDate: today() + 12
        ),
        a!map(
          id: 2,
          value: 129,
          label: "Order",
          tagIcon: "bullseye-alt",
          unit: "",
          icon: "",
          startDate: today() - 6,
          endDate: today() + 21
        ),
        a!map(
          id: 3,
          value: 1376,
          label: "total sales",
          tagIcon: "location-arrow",
          unit: "",
          icon: "",
          startDate: today() - 10,
          endDate: today() + 7
        )
      },
      {
        a!cardLayout(
          shape: "ROUNDED",
          padding: "STANDARD",
          showBorder: false,
          style: local!bgColor,
          contents:{
            a!columnsLayout(
              columns: a!forEach(
                items: local!kpiData,
                expression: {
                  a!localVariables(
                    local!total: tointeger(todate(index(fv!item,"endDate",{}))-todate(index(fv!item,"startDate",{}))),
                    local!current:  tointeger(todate(index(fv!item,"endDate",{}))-today()),
                    local!percent: if(
                      local!current<0,
                      100,
                      (100*local!current)/local!total
                    ),
                    local!graphLine: a!forEach(
                      items: enumerate(4)+1,
                      expression:60-(local!percent-25*fv!item),
                    ),
                    local!graphColors: a!forEach(
                      items: local!graphLine,
                      expression: a!localVariables(
                        local!hexCode: "#000000",
                        local!percent: fv!item,
    
                        local!r: hex2dec(mid(local!hexCode,1,2)),
                        local!g: hex2dec(mid(local!hexCode,3,2)),
                        local!b: hex2dec(mid(local!hexCode,5,2)),
    
                        local!newR: tointeger(local!r+((255-local!r)*local!percent/100)),
                        local!newG: tointeger(local!g+((255-local!g)*local!percent/100)),
                        local!newB: tointeger(local!b+((255-local!b)*local!percent/100)),
    
    
                        local!lightHex: concat("#",dec2hex(local!newR),dec2hex(local!newG),dec2hex(local!newB),"bbbbbb"),
                        if(
                          fv!item>100,
                          "#f2f2f2",
                          if(
                            fv!item<60,
                            local!bgColor,
                            left(local!lightHex,7)
                          )
                        )
                      )
                    ),
                    local!startDay: text(todate(index(fv!item,"startDate",{})),"mmm dd"),
                    local!endDay: text(todate(index(fv!item,"endDate",{})),"mmm dd"),
                    a!columnLayout(
                      contents: {
                        a!cardLayout(
                          shape: "ROUNDED",
                          showBorder: false,
                          padding: "STANDARD",
                          contents: {
                            a!sideBySideLayout(
                              alignVertical: "MIDDLE",
                              items: {
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    value: {
                                      a!richTextItem(
                                        size: "MEDIUM_PLUS",
                                        text: { upper(index(fv!item, "label", {})) }
                                      )
                                    }
                                  ),
                                  width: "MINIMIZE"
                                ),
                                a!sideBySideItem(
                                  item: a!richTextDisplayField(
                                    align: "RIGHT",
                                    value: {
                                      a!richTextIcon(
                                        icon: index(fv!item, "tagIcon", {}),
                                        size: "MEDIUM_PLUS",
                                      )
                                    }
                                  )
                                )
                              }
                            ),
                            a!richTextDisplayField(
                              value: {
                                a!richTextIcon(
                                  size: "MEDIUM",
                                  icon: { index(fv!item, "icon", {}) }
                                ),
                                a!richTextItem(
                                  size: "LARGE",
                                  style: "STRONG",
                                  text: {
                                    if(
                                      index(fv!item, "value", {})-tointeger(index(fv!item, "value", {}))=0,
                                      index(split(fixed(index(fv!item, "value", {})),"."),1,null()),
                                      fixed(index(fv!item, "value", {})),
                                    ),
                                    index(fv!item, "unit", {})
                                  }
                                )
                              }
                            ),
                            a!tagField(
                              marginAbove: "MORE",
                              align: "CENTER",
                              tags:{
                                a!tagItem(
                                  backgroundColor: local!bgColor,
                                  text:{
                                    fixed(local!percent)&"%"
                                  }
                                )
                              }
                            ),
                            a!columnsLayout(
                              spacing: "DENSE",
                              columns: {
                                a!forEach(
                                  items: local!graphColors,
                                  expression: a!columnLayout(
                                    contents: {
                                      a!sectionLayout(
                                        dividerColor: fv!item,
                                        dividerWeight: "THICK",
                                        divider: "ABOVE",
                                        contents: {
                                          a!richTextDisplayField(
                                            align: if(
                                              fv!isLast,
                                              "RIGHT",
                                              "LEFT"
                                            ),
                                            value: a!richTextItem(
                                              style: "STRONG",
                                              size: "MEDIUM",
                                              text: if(
                                                fv!isFirst,
                                                local!startDay,
                                                if(
                                                  fv!isLast,
                                                  local!endDay,
                                                  ""
                                                )
                                              )
                                            )
                                          )
                                        }
                                      )
                                    }
                                  )
                                )
                              }
                            )
                          }
                        )
                      }
                    )
                  )
                }
              ),
            ),
          }
        ),
      }
    )`
  },
  {
    "imgPath": "/src/images/case_dashboard.png",
    "bgColor": "#e5e7e9",
    "code": `{
      a!columnsLayout(
        columns: {
          a!columnLayout(
            contents: {
              a!cardLayout(
                showBorder: false,
                shape: "ROUNDED",
                padding: "STANDARD",
                style: "#e5e7e9",
                contents: {
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            height: "MEDIUM",
                            shape: "ROUNDED",
                            showBorder: false,
                            padding: "STANDARD",
                            style: "#97b9ff",
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      backgroundColor: "#fff",
                                      contentColor: "#000",
                                      size: "SMALL",
                                      icon: { "spa" }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextIcon(icon: { "ellipsis-h" }, size: "MEDIUM")
                                      }
                                    )
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                marginAbove: "MORE",
                                value: {
                                  a!richTextItem(
                                    size: "MEDIUM_PLUS",
                                    style: "STRONG",
                                    color: "#191f2c",
                                    text: { "Active Cases",  }
                                  ),
                                  char(10),
                                  a!richTextItem(
                                    color: "#647baa",
                                    text: {
                                      "7 new cases this month, with a total of 23 active cases."
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!cardLayout(
                            shape: "ROUNDED",
                            showBorder: false,
                            padding: "STANDARD",
                            height: "MEDIUM",
                            contents: {
                              a!sideBySideLayout(
                                items: {
                                  a!sideBySideItem(
                                    item: a!stampField(
                                      backgroundColor: "#e1ff01",
                                      contentColor: "#181818",
                                      size: "SMALL",
                                      icon: { "moon-o" }
                                    ),
                                    width: "MINIMIZE"
                                  ),
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      value: {
                                        a!richTextIcon(icon: { "ellipsis-h" }, size: "MEDIUM")
                                      }
                                    )
                                  )
                                }
                              ),
                              a!richTextDisplayField(
                                marginAbove: "MORE",
                                value: {
                                  a!richTextItem(
                                    size: "MEDIUM_PLUS",
                                    style: "STRONG",
                                    text: { "Closed Cases",  }
                                  ),
                                  char(10),
                                  a!richTextItem(
                                    color: "#bbb",
                                    text: {
                                      "This month, 3 cases were closed, bringing the total closed cases to 46."
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      ),
                      
                    }
                  ),
                  a!cardLayout(
                    shape: "ROUNDED",
                    showBorder: false,
                    marginAbove: "STANDARD",
                    padding: "EVEN_LESS",
                    contents: {
                      a!columnsLayout(
                        alignVertical: "MIDDLE",
                        columns: {
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents: {
                              a!stampField(
                                backgroundColor: "#e8ebed",
                                contentColor: "#181818",
                                size: "SMALL",
                                align: "START",
                                icon: { "plus-circle" }
                              ),
                              
                            }
                          ),
                          a!columnLayout(
                            contents: {
                              a!richTextDisplayField(
                                value: {
                                  a!richTextItem(
                                    style: "STRONG",
                                    text: { "You created 9 cases" }
                                  ),
                                  char(10),
                                  a!richTextItem(
                                    color: "#bbb",
                                    text: { "13 cases are approved" }
                                  )
                                }
                              )
                            }
                          ),
                          a!columnLayout(
                            width: "NARROW",
                            contents: {
                              a!cardLayout(
                                shape: "ROUNDED",
                                showBorder: false,
                                style: "#181818",
                                contents: {
                                  a!richTextDisplayField(
                                    align: "CENTER",
                                    value: {
                                      a!richTextItem(style: "STRONG", text: { "See All" })
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  ),
                  a!cardLayout(
                    shape: "ROUNDED",
                    showBorder: false,
                    padding: "LESS",
                    marginAbove: "STANDARD",
                    style: "#f3f5f6",
                    contents:{
                      a!gridField(
                        data: {}
                      )
                    }
                  )
                }
              )
            }
          ),
          a!columnLayout(contents: {})
        }
      ),
      
    }`
  },
  {
    "imgPath": "/src/images/project-timeline_02.png",
    "bgColor": "#fff",
    "code": `a!localVariables(
      local!projectTimeLine: {
        a!map(
          id:1,
          stage: "stage1",
          color:"#a798cd",
          timeSpent: 46.8,  
        ),
        a!map(
          id:2,
          stage: "stage2",
          color:"#b8f273",
          timeSpent: 8.64,  
        ),
        a!map(
          id:2,
          stage: "stage3",
          color:"#eed0b7",
          timeSpent: 16.56,  
        ),
      },
      local!totalTimeSpent:sum(index(local!projectTimeLine,"timeSpent",{})),
      {
        a!cardLayout(
          shape: "ROUNDED",
          showBorder: false,
          padding: "STANDARD",
          contents:{
            a!columnsLayout(
              alignVertical: "BOTTOM",
              columns:{
                a!columnLayout(
                  width: "NARROW",
                  contents:{
                    a!richTextDisplayField(
                      value:{
                        a!richTextItem(
                          size: "MEDIUM",
                          style: "STRONG",
                          color: "#656573",
                          text:{
                            "Project Time",
    
                          }
                        ),
                        char(10),
                        a!richTextItem(
                          size: "LARGE_PLUS",
                          color: "#323244",
                          style: "STRONG",
                          text:{
                            local!totalTimeSpent,
                            "h"
    
                          }
                        )  
    
                      }
                    )
    
                  }
                ),
                a!columnLayout(
                  contents:{
                    a!columnsLayout(
                      alignVertical: "BOTTOM",
                      spacing: "DENSE",
                      columns:{
                        a!foreach(
                          items: local!projectTimeLine,
                          expression: a!columnLayout(
                            width: tointeger(index(fv!item,"timeSpent")*10/local!totalTimeSpent)&"X",
                            contents:{
                              a!richTextDisplayField(
                                value: a!richTextItem(
                                  style: "STRONG",
                                  text: {
                                    index(fv!item,"timeSpent")*100/local!totalTimeSpent,
                                    "%",
                                    char(10),
                                    a!richTextItem(
                                      text: a!forEach(
                                        items: enumerate(tointeger(index(fv!item,"timeSpent")*4/local!totalTimeSpent)),
                                        expression: "."&char(10)
                                      ),
                                      color: "#bbb"
                                    )
                                  }
                                )
                              ),
                              a!cardLayout(
                                shape: "ROUNDED",
                                showBorder: false,
                                style: index(fv!item,"color",null()),
                                padding: "LESS",
                                contents:{
                                  
                                }
                              ),
                              a!richTextDisplayField(
                                value: a!richTextItem(
                                  style: "",
                                  text: {
                                    a!richTextItem(
                                      text: index(fv!item,"stage"),
                                      style: "STRONG",
                                    ),
                                    " (",
                                    a!richTextItem(
                                      text: {
                                        index(fv!item,"timeSpent"),
                                        "h"
                                      },
                                      color: "#bbb",
                                      style: "PLAIN"
                                    ),
                                    ")"
                                  }
                                )
                              ),
                            }
                          )
                        )
                      }
                    )
                  }
                )  
              }
            )
          }
        )
      }
    )`
  },
  {
    "imgPath": "/src/images/CalendarDashboard.png",
    "bgColor": "#181210",
    "code": `a!localVariables(
  local!cardStyle: "#1e1e20",
  local!primaryColor: "#e7e8e8",
  local!secondaryColor: "#3e3f40",
  local!categoryData: {
    a!map(
      color: "#fdd885",
      name: "Personal",
      width: 7
    ),
    a!map(
      color: "#b8d9fd",
      name: "Work",
      width: 4
    ),
    a!map(
      color: "#f6aad7",
      name: "Health",
      width: 9
    )
  },
  local!currentDate: today(),
  local!currentYear: year(local!currentDate),
  local!currentMonth: month(local!currentDate),
  local!monthNamesShort:{"Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"},
  local!monthNames: {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"},
  local!selectedMonth: index(
    local!monthNames,
    local!currentMonth,
    null()
  ),
  local!selectedType:2,
  local!filterData:{
    a!map(
      type: 1,
      title: "Month",
      value: 1,
    ),
    a!map(
      type: 2,
      title: "Week",
      value: 2,
    ),
    a!map(
      type: 3,
      title: "Day",
      value: 3,
    ),
  },
  local!currentDay: weekday(local!currentDate),
  local!firstDate: local!currentDate-local!currentDay+1,
  local!weekDays: {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"},
  local!datesData: a!forEach(
    items: enumerate(7)+1,
    expression: a!map(
      day: day(local!firstDate+fv!item-1),
      name: index(local!weekDays,fv!item,null()),
      date: local!firstDate+fv!item-1,
      month: index(local!monthNamesShort,month(local!firstDate+fv!item-1),null()),
    )
  ),
  local!selectedDates:{},
  local!startDateTime: todatetime("1/1/2023 10:00 AM"),
  local!timeValues: a!forEach(
    items: enumerate(11),
    expression: totime(local!startDateTime+fv!item/24),
  ),
  local!appointmentData:{
    a!map(
      id:1,
      title: "UI Development",
      date: today(),
      startTime: totime("09:20 AM"),
      period: 30,
      startAt: today()+totime("09:20 AM"),
      endAt: today()+totime("09:20 AM")+(30/60)/24,
      assignee: {loggedInUser(),"aakashs@appcino.com","amanj2@appcino.com","appianESGDemo"},
      bgColor: "#b8d9ff",
    ),
    a!map(
      id:2,
      title: "Team Meet",
      date: today(),
      startTime: totime("10:00 AM"),
      period: 55,
      startAt: today()+totime("10:00 AM"),
      endAt: today()+totime("10:00 AM")+(55/60)/24,
      assignee: {"harsheenb@appcino.com",loggedInUser(),"Procurement_User"},
      bgColor: "#c0b0ff"
    ),
    a!map(
      id:3,
      title: "Design Session",
      date: today(),
      startTime: totime("11:30 AM"),
      period: 150,
      startAt: today()+totime("11:30 AM"),
      endAt: today()+totime("11:30 AM")+(150/60)/24,
      assignee: {"TMS_MR",loggedInUser()},
      bgColor: "#fff"
    ),
    a!map(
      id:4,
      title: "New Project",
      date: today()-1,
      startTime: totime("10:30 AM"),
      period: 250,
      startAt: today()-1+totime("10:30 AM"),
      endAt: today()-1+totime("10:30 AM")+(250/60)/24,
      assignee: {"miguel.parrado@appcino.com",loggedInUser()},
      bgColor: "#fdd484"
    ),
    a!map(
      id:5,
      title: "Design Review",
      date: today()+1,
      startTime: totime("01:00 PM"),
      period: 250,
      startAt: today()+1+totime("01:00 PM"),
      endAt: today()+1+totime("01:00 PM")+(250/60)/24,
      assignee: {"rishikeshr@appcino.com",loggedInUser(),"riyazg@appcino.com","rohitm@appcino.com"},
      bgColor: "#a5eebe"
    ),
    a!map(
      id:1,
      title: "UI Development",
      date: today()+6,
      startTime: totime("09:20 AM"),
      period: 30,
      startAt: today()+6+totime("09:20 AM"),
      endAt: today()+6+totime("09:20 AM")+(30/60)/24,
      assignee: {loggedInUser(),"aakashs@appcino.com","amanj2@appcino.com","appianESGDemo"},
      bgColor: "#b8d9ff",
    ),
    a!map(
      id:2,
      title: "Team Meet",
      date: today()-6,
      startTime: totime("10:00 AM"),
      period: 55,
      startAt: today()-6+totime("10:00 AM"),
      endAt: today()-6+totime("10:00 AM")+(55/60)/24,
      assignee: {"harsheenb@appcino.com",loggedInUser(),"Procurement_User"},
      bgColor: "#c0b0ff"
    ),
    a!map(
      id:3,
      title: "Design Session",
      date: today()-5,
      startTime: totime("11:30 AM"),
      period: 150,
      startAt: today()-5+totime("11:30 AM"),
      endAt: today()-5+totime("11:30 AM")+(150/60)/24,
      assignee: {"TMS_MR",loggedInUser()},
      bgColor: "#fff"
    ),
    a!map(
      id:4,
      title: "New Project",
      date: today()-4,
      startTime: totime("10:30 AM"),
      period: 250,
      startAt: today()-4+totime("10:30 AM"),
      endAt: today()-4+totime("10:30 AM")+(250/60)/24,
      assignee: {"miguel.parrado@appcino.com",loggedInUser()},
      bgColor: "#fdd484"
    ),
    a!map(
      id:5,
      title: "Design Review",
      date: today()-3,
      startTime: totime("01:00 PM"),
      period: 250,
      startAt: today()-3+totime("01:00 PM"),
      endAt: today()-3+totime("01:00 PM")+(250/60)/24,
      assignee: {"rishikeshr@appcino.com",loggedInUser(),"riyazg@appcino.com","rohitm@appcino.com"},
      bgColor: "#a5eebe"
    )
  },
  a!headerContentLayout(
    contentsPadding: "LESS",
    backgroundColor: "#181210",
    contents: {
      a!columnsLayout(
        spacing: "DENSE",
        columns: {
          a!columnLayout(
            width: "3X",
            contents: {
              a!cardLayout(
                shape: "ROUNDED",
                marginBelow: "LESS",
                style: local!cardStyle,
                showBorder: false,
                padding: "LESS",
                contents: {
                  a!columnsLayout(
                    alignVertical: "MIDDLE",
                    columns: {
                      a!columnLayout(
                        width: "2X",
                        contents: {
                          a!sideBySideLayout(
                            items: {
                              a!sideBySideItem(
                                width: "MINIMIZE",
                                item: a!imageField(
                                  style: "AVATAR",
                                  size: "TINY",
                                  images: {
                                    a!userImage(
                                      user: loggedInUser()
                                    )
                                  }
                                )
                              ),
                              a!sideBySideItem(
                                item: a!richTextDisplayField(
                                  value: {
                                    a!richTextItem(
                                      text: {
                                        user(loggedInUser(),"firstName"),
                                        " ",
                                        user(loggedInUser(),"lastName")
                                      },
                                      style: "STRONG",
                                      color: local!primaryColor
                                    ),
                                    char(10),
                                    a!richTextItem(
                                      text: {
                                        "Product Designer"
                                      },
                                      size: "SMALL",
                                      color: "#7f8182"
                                    )
                                  }
                                )
                              )
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        width: "EXTRA_NARROW",
                        contents: {
                          a!sideBySideLayout(
                            spacing: "NONE",
                            items: {
                              a!sideBySideItem(
                                item: a!stampField(
                                  labelPosition: "COLLAPSED",
                                  align: "END",
                                  size: "TINY",
                                  icon: "calendar-o",
                                  backgroundColor: "#0f0f0f"
                                )
                              ),
                              a!sideBySideItem(
                                width: "MINIMIZE",
                                item: a!richTextDisplayField(
                                  labelPosition: "COLLAPSED",
                                  value: {
                                    a!richTextIcon(
                                      icon: "bell",
                                      color: "#b591ef"
                                    )
                                  }
                                )
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              ),
              rule!AD_dynamicCalendar(
                bgColor: local!cardStyle,
                primaryColor: local!primaryColor,
                secondaryColor: local!secondaryColor,
                dataSet: { a!map( date: today()+5, bgColor: "#f0f3f7", title: "Stage-01" ), a!map( date: today()+9, bgColor: "#b591ef", title: "Stage-02" ) },
                marginBelow: "LESS",
                selectedDates: local!selectedDates
              ),
              a!cardLayout(
                shape: "ROUNDED",
                marginBelow: "LESS",
                style: local!cardStyle,
                marginAbove: "LESS",
                showBorder: false,
                padding: "LESS",
                contents: {
                  a!sectionLayout(
                    isCollapsible: true,
                    labelSize: "EXTRA_SMALL",
                    labelColor: local!primaryColor,
                    label: "Categories",
                    marginBelow: "NONE",
                    contents: {
                      a!forEach(
                        items: local!categoryData,
                        expression: {
                          a!columnsLayout(
                            spacing: "DENSE",
                            alignVertical: "MIDDLE",
                            columns: {
                              a!columnLayout(
                                width: "4X",
                                contents: {
                                  a!sideBySideLayout(
                                    alignVertical: "MIDDLE",
                                    items: {
                                      a!sideBySideItem(
                                        width: "MINIMIZE",
                                        item: a!richTextDisplayField(
                                          labelPosition: "COLLAPSED",
                                          value: {
                                            a!richTextIcon(
                                              icon: "circle",
                                              color: index(fv!item,"color",null())
                                            )
                                          }
                                        )
                                      ),
                                      a!sideBySideItem(
                                        width: "MINIMIZE",
                                        item: a!richTextDisplayField(
                                          labelPosition: "COLLAPSED",
                                          value: {
                                            a!richTextItem(
                                              text: index(fv!item,"name",null()),
                                              color: local!primaryColor
                                            )
                                          }
                                        )
                                      )
                                    }
                                  )
                                }
                              ),
                              a!columnLayout(
                                width: "6X",
                                contents: {
                                  a!cardLayout(
                                    showBorder: false,
                                    shape: "ROUNDED",
                                    padding: "NONE",
                                    style: local!secondaryColor,
                                    contents: {
                                      a!columnsLayout(
                                        marginAbove: "NONE",
                                        marginBelow: "NONE",
                                        spacing: "NONE",
                                        columns: {
                                          a!columnLayout(
                                            width: index(fv!item,"width",null())&"X",
                                            contents: {
                                              a!horizontalLine(
                                                marginAbove: "NONE",
                                                marginBelow: "NONE",
                                                color: index(fv!item,"color",null()),
                                                weight: "THICK"
                                              )
                                            }
                                          ),
                                          a!columnLayout(
                                            width: "3X",
                                          )
                                        }
                                      )
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              ),
            }
          ),
          a!columnLayout(
            width: "7X",
            contents: {
              a!cardLayout(
                style: "",
                showBorder: false,
                shape: "ROUNDED",
                padding: "NONE",
                contents: {
                  a!cardLayout(
                    style: "TRANSPARENT",
                    showBorder: false,
                    padding: "LESS",
                    marginBelow: "NONE",
                    contents: {
                      a!columnsLayout(
                        alignVertical: "MIDDLE",
                        columns: {
                          a!columnLayout(
                            contents: {
                              a!richTextDisplayField(
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextItem(
                                    text: {
                                      local!selectedMonth,
                                      ", ",
                                      local!currentYear
                                    },
                                    size: "MEDIUM",
                                    style: ""
                                  )
                                }
                              )
                            }
                          ),
                          a!columnLayout(
                            width: "NARROW_PLUS",
                            contents: {
                              a!cardLayout(
                                shape: "ROUNDED",
                                padding: "EVEN_LESS",
                                style: "#f5f6f7",
                                showBorder: false,
                                contents: {
                                  a!columnsLayout(
                                    spacing: "DENSE",
                                    columns: a!forEach(
                                      items: local!filterData,
                                      expression: a!columnLayout(
                                        contents: {
                                          a!cardLayout(
                                            shape: "ROUNDED",
                                            showBorder: false,
                                            style: if(
                                              local!selectedType = index(fv!item,"type",null()),
                                              "",
                                              "TRANSPARENT"
                                            ),
                                            contents: {
                                              a!richTextDisplayField(
                                                labelPosition: "COLLAPSED",
                                                align: "CENTER",
                                                value: a!richTextItem(
                                                  text: index(fv!item,"title",null()),
                                                  style: "STRONG",
                                                  color: if(
                                                    local!selectedType = index(fv!item,"type",null()),
                                                    "ACCENT",
                                                    local!secondaryColor
                                                  )
                                                )
                                              )
                                            },
                                            link: a!dynamicLink(
                                              value: index(fv!item,"type",null()),
                                              saveInto: {
                                                local!selectedType
                                              }
                                            )
                                          )
                                        }
                                      )
                                    )
                                  )
                                }
                              )
                            }
                          ),
                          a!columnLayout(
                            width: "",
                            contents: {
                              a!sideBySideLayout(
                                alignVertical: "MIDDLE",
                                items: {
                                  a!sideBySideItem(
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextIcon(
                                          icon: "caret-square-left",
                                          size: "MEDIUM_PLUS",
                                          color: "#bbb",
                                          linkStyle: "STANDALONE",
                                          link: a!dynamicLink(
                                            value: if(
                                              local!selectedType = 3,
                                              local!currentDate-1,
                                              if(
                                                local!selectedType = 2,
                                                local!currentDate-7,
                                                if(
                                                  local!currentMonth-1<1,
                                                  todate(concat("12/1/",local!currentYear-1)),
                                                  todate(concat(local!currentMonth-1,"/1/",local!currentYear))
                                                )
                                              )
                                            ),
                                            saveInto: {
                                              local!currentDate
                                            }
                                          )
                                        )
                                      }
                                    )
                                  ),
                                  a!sideBySideItem(
                                    width: "MINIMIZE",
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextItem(
                                          text: {
                                            if(
                                              local!currentDate = today(),
                                              "Today",
                                              {local!selectedMonth," ",day(local!currentDate)}
                                            )
                                          },
                                          size: "MEDIUM",
                                        )
                                      }
                                    )
                                  ),
                                  a!sideBySideItem(
                                    width: "MINIMIZE",
                                    item: a!richTextDisplayField(
                                      align: "RIGHT",
                                      labelPosition: "COLLAPSED",
                                      value: {
                                        a!richTextIcon(
                                          icon: "caret-square-right",
                                          size: "MEDIUM_PLUS",
                                          color: "#bbb",
                                          linkStyle: "STANDALONE",
                                          link: a!dynamicLink(
                                            value: if(
                                              local!selectedType = 3,
                                              local!currentDate+1,
                                              if(
                                                local!selectedType = 2,
                                                local!currentDate+7,
                                                if(
                                                  local!currentMonth+1>12,
                                                  todate(concat("1/1/",local!currentYear+1)),
                                                  todate(concat(local!currentMonth+1,"/1/",local!currentYear))
                                                )
                                              )
                                            ),
                                            saveInto: {
                                              local!currentDate
                                            }
                                          )
                                        )
                                      }
                                    )
                                  ),
                                }
                              )
                            }
                          )
                        }
                      ),
                      a!columnsLayout(
                        spacing: "DENSE",
                        alignVertical: "MIDDLE",
                        columns: {
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents: {
                              a!richTextDisplayField(
                                align: "CENTER",
                                labelPosition: "COLLAPSED",
                                value: {
                                  a!richTextIcon(
                                    icon: "calendar-alt",
                                    size: "MEDIUM_PLUS",
                                  )
                                }
                              )
                            }
                          ),
                          a!forEach(
                            items: local!datesData,
                            expression: {
                              a!columnLayout(
                                contents: {
                                  a!cardLayout(
                                    shape: "ROUNDED",
                                    style: if(
                                      local!currentDate = index(fv!item,"date",null()),
                                      "#262626",
                                      "#f5f6f7"
                                    ),
                                    showBorder: false,
                                    padding: "STANDARD",
                                    contents: {
                                      a!richTextDisplayField(
                                        labelPosition: "COLLAPSED",
                                        align: "CENTER",
                                        value: {
                                          a!richTextItem(
                                            size: "STANDARD",
                                            text: index(fv!item,"month",null())
                                          ),
                                          char(10),
                                          a!richTextItem(
                                            size: "MEDIUM_PLUS",
                                            style: "STRONG",
                                            text: index(fv!item,"day",null())
                                          ),
                                          char(10),
                                          a!richTextItem(
                                            size: "SMALL",
                                            text: index(fv!item,"name",null())
                                          ),
                                        }
                                      )
                                    },
                                    link: a!dynamicLink(
                                      value: index(fv!item,"date",null()),
                                      saveInto: {
                                        local!currentDate
                                      }
                                    )
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  ),
                  a!horizontalLine(
                    marginAbove: "NONE",
                    marginBelow: "NONE",
                    color: "#f3f4f5"
                  ),
                  a!cardLayout(
                    showBorder: false,
                    style: "#f3f4f5",
                    padding: "LESS",
                    contents: {
                      a!columnsLayout(
                        spacing: "DENSE",
                        showDividers: true(),
                        columns: {
                          a!columnLayout(
                            width: "EXTRA_NARROW",
                            contents: {
                              a!forEach(
                                items: local!timeValues,
                                expression: {
                                  a!richTextDisplayField(
                                    align: "CENTER",
                                    value: {
                                      a!forEach(
                                        items: enumerate(6),
                                        expression: char(10),
                                      ),
                                      a!richTextItem(
                                        text: fv!item,
                                        size: "SMALL"
                                      )
                                    }
                                  ),
                                  a!horizontalLine(
                                    marginAbove: "NONE",
                                    marginBelow: "NONE",
                                    showWhen: not(fv!isLast)
                                  )
                                },
                              )
                            }
                          ),
                          a!forEach(
                            items: local!datesData,
                            expression: a!columnLayout(
                              contents: {
                                a!localVariables(
                                  local!currentData: index(
                                    local!appointmentData,
                                    wherecontains(
                                      todate(index(fv!item,"date",null())),
                                      apply(todate(_),index(local!appointmentData,"date",null()))
                                    ),
                                    null()
                                  ),
                                  local!startDateTime: todatetime(todate(index(fv!item,"date",null()))+"09:00 AM"),
                                  {
                                    a!forEach(
                                      items: local!currentData,
                                      expression: {
                                        if(
                                          fv!isFirst,
                                          a!richTextDisplayField(
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            value: a!richTextItem(
                                              text: a!localVariables(
                                                local!refernceDateTime: index(fv!item,"startAt",null())-local!startDateTime,
                                                local!hour: hour(local!refernceDateTime),
                                                local!min: minute(local!refernceDateTime),
                                                local!period: local!hour*8+tointeger(local!min)/10,
                                                a!forEach(
                                                  items: enumerate(local!period),
                                                  expression: char(10)
                                                )
                                              )
                                            )
                                          ),
                                          a!richTextDisplayField(
                                            marginAbove: "NONE",
                                            marginBelow: "NONE",
                                            value: a!localVariables(
                                              local!lastData: index(local!currentData,fv!index-1,null()),
                                              local!lastEndAt: index(local!lastData,"endAt",null()),
                                              local!refernceDateTime: index(fv!item,"startAt",null())-local!lastEndAt,
                                              local!hour: hour(local!refernceDateTime),
                                              local!min: minute(local!refernceDateTime),
                                              local!period: local!hour*8+tointeger(local!min)/10,
                                              a!forEach(
                                                items: enumerate(local!period),
                                                expression: char(10)
                                              ) 
                                            )
                                          ),
                                        ),
                                        a!cardLayout(
                                          padding: "NONE",
                                          shape: "ROUNDED",
                                          marginAbove: "NONE",
                                          marginBelow: "NONE",
                                          showBorder: false,
                                          style: index(fv!item,"bgColor",null),
                                          contents: {
                                            a!richTextDisplayField(
                                              marginAbove: "NONE",
                                              marginBelow: "NONE",
                                              align: "CENTER",
                                              value: {
                                                a!richTextItem(
                                                  text: index(fv!item,"title",null()),
                                                  style: "STRONG"
                                                ),
                                                char(10),
                                                a!richTextItem(
                                                  text: concat(
                                                    totime(index(fv!item,"startAt",null())),
                                                    " - ",
                                                    totime(index(fv!item,"endAt",null()))
                                                  ),
                                                  color: "SECONDARY",
                                                  size: "SMALL"
                                                )
                                              }
                                            ),
                                            a!sideBySideLayout(
                                              marginAbove: "EVEN_LESS",
                                              spacing: "NONE",
                                              items: {
                                                a!sideBySideItem(
                                                  width: "MINIMIZE",
                                                  item: a!richTextDisplayField(
                                                    value: " "
                                                  )
                                                ),
                                                a!forEach(
                                                  items: index(fv!item,"assignee",null),
                                                  expression: a!sideBySideItem(
                                                    width: "MINIMIZE",
                                                    item: a!imageField(
                                                      size: "ICON",
                                                      style: "AVATAR",
                                                      images: a!userImage(
                                                        user: fv!item
                                                      )
                                                    )
                                                  ),
                                                ),
                                                a!sideBySideItem(
                                                  width: "MINIMIZE",
                                                  item: a!richTextDisplayField(
                                                    value: {
                                                      char(9),
                                                      char(9),
                                                    }
                                                  )
                                                ),
                                              }
                                            ),
                                            a!richTextDisplayField(
                                              marginAbove: "NONE",
                                              marginBelow: "NONE",
                                              value: a!richTextItem(
                                                text:{
                                                  a!localVariables(
                                                    local!refernceDateTime: index(fv!item,"endAt",null())- index(fv!item,"startAt",null()),
                                                    local!hour: hour(local!refernceDateTime),
                                                    local!min: if(
                                                      minute(local!refernceDateTime)-30<0,
                                                      0,
                                                      minute(local!refernceDateTime)-30
                                                    ),
                                                    local!period: local!hour*7+tointeger(local!min)/10,
                                                    {
                                                      a!forEach(
                                                        items: enumerate(local!period),
                                                        expression: char(10)
                                                      ),
                                                    }
                                                  ),
                                                }
                                              )
                                            ),
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              }
                            )
                          )
                        }
                      )
                    }
                  )
                },
              ),
            }
          ),
        }
      )
    }
  )
    )`
  },
  {
    "imgPath": "/src/images/dynamicCalendar.png",
    "bgColor": "",
    "code":  `a!localVariables(
  /*------ri------
  
  name            type
  
  primaryColor    text
  secondaryColor  text
  bgColor         text
  dataSet         map(list)
                  description
                  {
                    a!map(
                      date: today()+5,
                      bgColor: "#f0f3f7",
                      title: "Stage-01"
                    ),
                    a!map(
                      date: today()+9,
                      bgColor: "#f1d3e7",
                      title: "Stage-02"
                    )
                  },

  showSwitchStyle boolean
  marginBelow     text
  marginAbove     text
  selectedDates   date(list)

  */
  local!primaryColor: if(
    a!isNullOrEmpty(ri!primaryColor),
    "#172032",
    ri!primaryColor
  ),
  local!secondaryColor: if(
    a!isNullOrEmpty(ri!secondaryColor),
    "#90949e",
    ri!secondaryColor
  ),
  local!calendarStyleSet: {
    a!map(
      type: 1,
      title: "Su-Sa",
      value: {"Su","Mo","Tu","We","Th","Fr","Sa"},
    ),
    a!map(
      type: 2,
      title: "Mo-Su",
      value: {"Mo","Tu","We","Th","Fr","Sa","Su"},
    )
  },
  local!selectedCalendarStyle: 1,
  local!weekdayNames: index(
    index(
      index(local!calendarStyleSet,"value",null()),
      wherecontains(
        tointeger(local!selectedCalendarStyle),
        tointeger(index(local!calendarStyleSet,"type",null()))
      ),
      null()
    ),
    1,
    null()
  ),
  local!monthNames: {"Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"},
  local!today: today(),
  local!currentDate: today(),
  local!currentMonth: month(local!currentDate),
  local!currentYear: year(local!currentDate),
  local!firstDateOfCurrentMonth: todate(concat({local!currentMonth,"/1/",local!currentYear})),
  local!lastDayOfCurrentMonth: daysinmonth(local!currentMonth,local!currentYear),
  local!lastDateOfCurrentMonth: todate(concat({local!currentMonth,"/",local!lastDayOfCurrentMonth,"/",local!currentYear})),
  local!weekDayOfFirstDate: weekday(local!firstDateOfCurrentMonth, local!selectedCalendarStyle),
  local!weekDayOfLastDate: weekday(local!lastDateOfCurrentMonth, local!selectedCalendarStyle),
  local!firstDateOfCalendarScreen: local!firstDateOfCurrentMonth-local!weekDayOfFirstDate+1,
  local!lastDateOfCalendarScreen: local!lastDateOfCurrentMonth+7-local!weekDayOfLastDate,
  local!completeRange: (tointeger(local!lastDateOfCalendarScreen-local!firstDateOfCalendarScreen)+1)/7,
  local!dataSet:ri!dataSet,
  {
    a!cardLayout(
      shape: "ROUNDED",
      padding: "NONE",
      style: ri!bgColor,
      showBorder: false,
      contents: {
        a!cardLayout(
          showBorder: false,
          padding: "STANDARD",
          style: "TRANSPARENT",
          contents: {
            a!columnsLayout(
              alignVertical: "MIDDLE",
              marginBelow: "NONE",
              columns: {
                a!columnLayout(
                  width: "2X",
                  contents: {
                    a!sideBySideLayout(
                      marginAbove: "NONE",
                      marginBelow: "NONE",
                      alignVertical: "MIDDLE",
                      items: {
                        a!sideBySideItem(
                          width: "MINIMIZE",
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextIcon(
                                icon: "caret-square-left",
                                size: "MEDIUM_PLUS",
                                color: local!secondaryColor,
                                linkStyle: "STANDALONE",
                                link: a!dynamicLink(
                                  value: local!firstDateOfCurrentMonth-1,
                                  saveInto: local!currentDate
                                )
                              )
                            }
                          )
                        ),
                        a!sideBySideItem(
                          width: "MINIMIZE",
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: a!richTextItem(
                              text: {
                                index(local!monthNames,local!currentMonth,null()),
                                ", ",
                                local!currentYear
                              },
                              color: local!primaryColor,
                              style: "",
                              size: "MEDIUM"
                            )
                          )
                        ),
                        a!sideBySideItem(
                          width: "MINIMIZE",
                          item: a!richTextDisplayField(
                            labelPosition: "COLLAPSED",
                            value: {
                              a!richTextIcon(
                                icon: "caret-square-right",
                                size: "MEDIUM_PLUS",
                                color: local!secondaryColor,
                                linkStyle: "STANDALONE",
                                link: a!dynamicLink(
                                  value: local!lastDateOfCurrentMonth+1,
                                  saveInto: local!currentDate
                                )
                              )
                            }
                          )
                        ),
                      }
                    )
                  }
                ),
                a!columnLayout(
                  showWhen: ri!showSwitchStyle=true,
                  width: "NARROW",
                  contents: {
                    a!cardLayout(
                      shape: "ROUNDED",
                      padding: "EVEN_LESS",
                      style: "#f5f6f7",
                      showBorder: false,
                      contents: {
                        a!columnsLayout(
                          spacing: "DENSE",
                          columns: a!forEach(
                            items: local!calendarStyleSet,
                            expression: a!columnLayout(
                              contents: {
                                a!cardLayout(
                                  shape: "ROUNDED",
                                  showBorder: false,
                                  style: if(
                                    local!selectedCalendarStyle = index(fv!item,"type",null()),
                                    "",
                                    "TRANSPARENT"
                                  ),
                                  contents: {
                                    a!richTextDisplayField(
                                      labelPosition: "COLLAPSED",
                                      align: "CENTER",
                                      value: a!richTextItem(
                                        text: index(fv!item,"title",null()),
                                        style: "STRONG",
                                        color: if(
                                          local!selectedCalendarStyle = index(fv!item,"type",null()),
                                          "ACCENT",
                                          local!secondaryColor
                                        )
                                      )
                                    )
                                  },
                                  link: a!dynamicLink(
                                    value: index(fv!item,"type",null()),
                                    saveInto: {
                                      local!selectedCalendarStyle
                                    }
                                  )
                                )
                              }
                            )
                          )
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ),
        a!horizontalLine(
          color: local!secondaryColor,
          marginBelow: "NONE",
          marginAbove: "NONE"
        ),
        {
          a!columnsLayout(
            marginAbove: "EVEN_LESS",
            marginBelow: "EVEN_LESS",
            columns: a!forEach(
              items: local!weekdayNames,
              expression: a!columnLayout(
                contents: {
                  a!richTextDisplayField(
                    align: "CENTER",
                    labelPosition: "COLLAPSED",
                    value: {
                      a!richTextItem(
                        style: "STRONG",
                        text: fv!item,
                        color: local!primaryColor
                      )
                    }
                  )
                }
              )
            )
          ),
          a!horizontalLine(
            color: local!secondaryColor,
            marginBelow: "NONE"
          ),
          a!forEach(
            items: enumerate(local!completeRange),
            expression: a!columnsLayout(
              marginAbove: "NONE",
              alignVertical: "MIDDLE",
              marginBelow: if(
                fv!isLast,
                "LESS",
                "NONE"
              ),
              columns: a!forEach(
                items: enumerate(7)+7*(fv!index-1),
                expression: a!columnLayout(
                  contents: {
                    a!localVariables(
                      local!dateValue:local!firstDateOfCalendarScreen+fv!item,
                      local!colorBySet: index(
                        index(
                          index(local!dataSet,"bgColor",null()),
                          wherecontains(
                            todate(local!dateValue),
                            todate(index(local!dataSet,"date",null()))
                          ),
                          null()
                        ),
                        1,
                        null()
                      ),
                      local!itemColor: if(
                        contains(
                          todate(append(ri!selectedDates,local!today)),
                          todate(local!dateValue)
                        ),
                        "ACCENT",
                        if(
                          a!isNullOrEmpty(local!colorBySet),
                          if(
                            or(
                              local!dateValue<local!firstDateOfCurrentMonth,
                              local!dateValue>local!lastDateOfCurrentMonth
                            ),
                            local!secondaryColor,
                            local!primaryColor
                          ),
                          local!colorBySet
                        )
                      ),
                      local!itemStyle:if(
                        contains(
                          todate(ri!selectedDates),
                          todate(local!dateValue)
                        ),
                        1,
                        if(
                          a!isNullOrEmpty(local!colorBySet),
                          2,
                          1
                        )
                      ),
                      local!day: day(local!dateValue),
                      choose(
                        local!itemStyle,
                        a!stampField(
                          align: "CENTER",
                          marginAbove: "NONE",
                          marginBelow: "NONE",
                          labelPosition: "COLLAPSED",
                          size: "TINY",
                          backgroundColor: local!itemColor,
                          text: local!day,
                          link: a!dynamicLink(
                            value: local!dateValue,
                            saveInto: {
                              a!save(
                                ri!selectedDates,
                                remove(
                                  ri!selectedDates,
                                  wherecontains(
                                    todate(local!dateValue),
                                    todate(ri!selectedDates)
                                  )
                                )
                              )
                            }
                          )
                        ),
                        a!richTextDisplayField(
                          labelPosition: "COLLAPSED",
                          marginAbove: "NONE",
                          marginBelow: "NONE",
                          align: "CENTER",
                          value: {
                            a!richTextItem(
                              text: {
                                char(10),
                                local!day,
                                char(10),
                                char(10)
                              },
                              color: local!itemColor,
                              linkStyle: "STANDALONE",
                              link: a!dynamicLink(
                                value: local!dateValue,
                                saveInto: {
                                  a!save(
                                    ri!selectedDates,
                                    append(ri!selectedDates,local!dateValue)
                                  )
                                }
                              )
                            )
                          }
                        )
                      )
                    )
                  }
                )
              )
            )
          )
        }
      },
      marginAbove: ri!marginAbove,
      marginBelow: ri!marginBelow
    ),
    a!cardLayout(
      showBorder: false,
      shape: "ROUNDED",
      style: ri!bgColor,
      showWhen: a!isNotNullOrEmpty(ri!dataSet),
      contents: a!forEach(
        items: union(
          index(local!dataSet,"title",null()),
          index(local!dataSet,"title",null()),
        ),
        expression:{
          a!sideBySideLayout(
            alignVertical: "MIDDLE",
            items: {
              a!sideBySideItem(
                item: a!richTextDisplayField(
                  align: "RIGHT",
                  value: a!richTextItem(
                    text: fv!item,
                    style: "STRONG",
                    color: local!primaryColor
                  )
                )
              ),
              a!sideBySideItem(
                width: "MINIMIZE",
                item: a!richTextDisplayField(
                  value: a!richTextIcon(
                    icon: "circle",
                    color: index(
                      index(local!dataSet,"bgColor",null()),
                      wherecontains(
                        touniformstring(fv!item),
                        touniformstring(index(local!dataSet,"title",null()))
                      ),
                      null()
                    )
                  )
                )
              )
            }
          ),
        }
      )
    )
  }
)` 
  }
  
  
  // Add more elements as needed
];
