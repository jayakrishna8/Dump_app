class Animal < ActiveRecord::Base
  belongs_to :tribe
  self.inheritance_column = :race
end