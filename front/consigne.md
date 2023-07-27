    position: relative;
    &--item {
      cursor: pointer;
      @include liste;
      color: $color-quaternary !important;
      padding: 10px;
      border-radius: 5px;
      &:not(:first-child) {
        margin-top: 15px;
      }
      &:hover {
        background-color: #ffffff0d;
        color: $white-color;
      }
    }
    &--icon {
      fill: $color-quaternary;
      width: 15px;
      height: 15px;
    }
    &--link {
        position: relative;
      color: inherit;
      text-decoration: none;
      background-color: transparent;
    }
    &--text {
      margin-left: 15px;
      font-weight: 500;
      background-color: none;
    }