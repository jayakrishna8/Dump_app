class CreateDataAqNotes < ActiveRecord::Migration
  def change
    create_table :data_aq_notes do |t|
      t.text :note_txt
      t.text :high_priority_txt
      t.integer :segment_id
      t.integer :smid_id
      t.integer :smid_unit_id
      t.date :due_date
      t.date :complete_date

      t.timestamps
    end
    add_index :data_aq_notes, [:segment_id], :name => "index_data_aq_notes_on_segment_id"
  end
end