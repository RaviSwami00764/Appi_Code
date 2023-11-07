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
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#000",
                                          contents:{
                                            a!richTextDisplayField(
                                              tooltip: "4",
                                              value:{
                                                a!richTextItem(
                                                  text: {  
                                                    char(10),
                                                    char(10),
                                                    char(10),
                                                    char(10),   
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Mo"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#000",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),  
                                                char(10),
                                                char(10),
                                                char(10), 
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Tu"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#000",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
                                                char(10), 
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "We"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#000",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Th"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#dfd8d2",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Fr"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#dfd8d2",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Sa"
                                      }
                                    )
                                  }
                                )  
                              }
                            ), 
                            a!columnLayout(
                              width: "EXTRA_NARROW",
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
                                        a!cardLayout(
                                          shape: "ROUNDED",
                                          style: "#dfd8d2",
                                          contents:{
                                            a!richTextDisplayField(
                                              value:{
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
                                                char(10),
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
                                a!tagField(
                                  align: "END",
                                  tags:{
                                    a!tagItem(
                                      backgroundColor: "#dfd8d2",
                                      text:{
                                        "Su"
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
                        a!paragraphField(
                          value: local!graphLine
                        ),
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
  
  
  // Add more elements as needed
];
